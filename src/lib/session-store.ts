import { createClient } from '@/lib/supabase/server'
import type { Session, MarketReport } from '@/types'
import type { LandscapeDTO } from '@/types/competitive'
import { nanoid } from 'nanoid'

// ────── SESSIONS (org chart) ──────

export async function getSession(id: string): Promise<Session | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) {
    // Fallback: check demo_sessions
    return getDemoSession(id)
  }

  return dbToSession(data)
}

export async function setSession(session: Session, userId?: string): Promise<void> {
  if (!userId) {
    // Demo mode — store in demo_sessions
    await setDemoData(session.id, sessionToDb(session), 'session')
    return
  }

  const supabase = await createClient()
  const row = {
    id: session.id,
    user_id: userId,
    status: session.status,
    file_name: session.fileName,
    column_mapping: session.columnMapping,
    organization: session.organization,
    questions: session.questions,
    answered_questions: session.answeredQuestions,
    export_settings: session.exportSettings,
    share_id: session.shareId,
    updated_at: new Date().toISOString(),
  }

  await supabase.from('sessions').upsert(row)
}

export async function deleteSession(id: string): Promise<void> {
  const supabase = await createClient()
  await supabase.from('sessions').delete().eq('id', id)
}

// ────── REPORTS (market reports) ──────

export async function getReport(id: string): Promise<MarketReport | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('reports')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) {
    // Fallback: check demo_sessions
    return getDemoReport(id)
  }

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    organizations: data.organizations,
    clientBranding: data.client_branding,
  }
}

export async function setReport(report: MarketReport, userId?: string): Promise<void> {
  if (!userId) {
    await setDemoData(report.id, report, 'report')
    return
  }

  const supabase = await createClient()
  const row = {
    id: report.id,
    user_id: userId,
    title: report.title,
    date: report.date,
    organizations: report.organizations,
    client_branding: report.clientBranding || null,
    updated_at: new Date().toISOString(),
  }

  await supabase.from('reports').upsert(row)
}

export async function deleteReport(id: string): Promise<void> {
  const supabase = await createClient()
  await supabase.from('reports').delete().eq('id', id)
}

// ────── USER-SCOPED QUERIES ──────

export async function getUserReports(userId: string): Promise<MarketReport[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('reports')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (!data) return []

  return data.map(d => ({
    id: d.id,
    title: d.title,
    date: d.date,
    organizations: d.organizations,
    clientBranding: d.client_branding,
  }))
}

export async function getUserSessions(userId: string): Promise<Session[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (!data) return []
  return data.map(dbToSession)
}

// ────── LANDSCAPES ──────

export async function getLandscape(id: string): Promise<LandscapeDTO | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('demo_sessions')
    .select('*')
    .eq('id', id)
    .eq('type', 'landscape')
    .gt('expires_at', new Date().toISOString())
    .single()

  if (!data) return null
  return data.data as LandscapeDTO
}

export async function setLandscape(id: string, landscape: LandscapeDTO, userId?: string): Promise<void> {
  const supabase = await createClient()
  await supabase.from('demo_sessions').upsert({
    id,
    data: landscape,
    type: 'landscape',
    expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24hr TTL
  })
}

// ────── DEMO SESSIONS (anonymous, 2hr TTL) ──────

async function setDemoData(id: string, data: unknown, type: 'session' | 'report'): Promise<void> {
  const supabase = await createClient()
  await supabase.from('demo_sessions').upsert({
    id,
    data,
    type,
    expires_at: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  })
}

async function getDemoSession(id: string): Promise<Session | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('demo_sessions')
    .select('*')
    .eq('id', id)
    .eq('type', 'session')
    .gt('expires_at', new Date().toISOString())
    .single()

  if (!data) return null
  return dbToSession(data.data)
}

async function getDemoReport(id: string): Promise<MarketReport | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('demo_sessions')
    .select('*')
    .eq('id', id)
    .eq('type', 'report')
    .gt('expires_at', new Date().toISOString())
    .single()

  if (!data) return null
  return data.data as MarketReport
}

// ────── HELPERS ──────

function dbToSession(row: Record<string, unknown>): Session {
  return {
    id: row.id as string,
    status: row.status as Session['status'],
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    fileName: row.file_name as string,
    rawData: null,
    headers: null,
    columnMapping: row.column_mapping as Session['columnMapping'],
    organization: row.organization as Session['organization'],
    questions: (row.questions || []) as Session['questions'],
    answeredQuestions: (row.answered_questions || []) as string[],
    exportSettings: row.export_settings as Session['exportSettings'],
    shareId: row.share_id as string | null,
  }
}

function sessionToDb(session: Session): Record<string, unknown> {
  return {
    id: session.id,
    status: session.status,
    file_name: session.fileName,
    column_mapping: session.columnMapping,
    organization: session.organization,
    questions: session.questions,
    answered_questions: session.answeredQuestions,
    export_settings: session.exportSettings,
    share_id: session.shareId,
    created_at: session.createdAt,
    updated_at: session.updatedAt,
  }
}

export { nanoid }
