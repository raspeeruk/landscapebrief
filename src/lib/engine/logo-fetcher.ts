// Known org name → domain mappings for common financial institutions
const DOMAIN_MAP: Record<string, string> = {
  'julius baer': 'juliusbaer.com',
  'julius bär': 'juliusbaer.com',
  'j safra sarasin': 'jsafrasarasin.com',
  'j. safra sarasin': 'jsafrasarasin.com',
  'safra sarasin': 'jsafrasarasin.com',
  'barclays': 'barclays.com',
  'citi': 'citigroup.com',
  'citigroup': 'citigroup.com',
  'citibank': 'citibank.com',
  'deutsche bank': 'db.com',
  'ubs': 'ubs.com',
  'credit suisse': 'credit-suisse.com',
  'hsbc': 'hsbc.com',
  'morgan stanley': 'morganstanley.com',
  'jp morgan': 'jpmorgan.com',
  'jpmorgan': 'jpmorgan.com',
  'j.p. morgan': 'jpmorgan.com',
  'goldman sachs': 'goldmansachs.com',
  'bank of america': 'bankofamerica.com',
  'bnp paribas': 'bnpparibas.com',
  'societe generale': 'societegenerale.com',
  'pictet': 'pictet.com',
  'lombard odier': 'lombardodier.com',
  'edmond de rothschild': 'edmond-de-rothschild.com',
  'rothschild': 'rothschild.com',
  'lazard': 'lazard.com',
  'schroders': 'schroders.com',
  'rbc': 'rbc.com',
  'scotiabank': 'scotiabank.com',
  'standard chartered': 'sc.com',
  'nomura': 'nomura.com',
  'macquarie': 'macquarie.com',
  'investec': 'investec.com',
  'efg': 'efginternational.com',
  'efg international': 'efginternational.com',
  'vontobel': 'vontobel.com',
  'zurcher kantonalbank': 'zkb.ch',
  'zkb': 'zkb.ch',
  'bank leumi': 'bankleumi.com',
  'hapoalim': 'bankhapoalim.com',
  'bank hapoalim': 'bankhapoalim.com',
}

// Known company names for fuzzy matching from URLs/domains
// Maps a recognizable substring → canonical domain
const FUZZY_COMPANY_MAP: Record<string, string> = {
  'barclay': 'barclays.com',
  'julius': 'juliusbaer.com',
  'safra': 'jsafrasarasin.com',
  'sarasin': 'jsafrasarasin.com',
  'deutsch': 'db.com',
  'goldmansach': 'goldmansachs.com',
  'morganstanl': 'morganstanley.com',
  'jpmorgan': 'jpmorgan.com',
  'citigroup': 'citigroup.com',
  'citibank': 'citibank.com',
  'lombard': 'lombardodier.com',
  'rothschild': 'rothschild.com',
  'schrod': 'schroders.com',
  'investec': 'investec.com',
  'vontobel': 'vontobel.com',
  'macquari': 'macquarie.com',
  'nomura': 'nomura.com',
  'pictet': 'pictet.com',
  'lazard': 'lazard.com',
  'hapoalim': 'bankhapoalim.com',
  'leumi': 'bankleumi.com',
}

/**
 * Extract a domain from text that looks like a URL or domain.
 * e.g. "ed.gbarkleys.com" → "barclays.com" (via fuzzy match)
 *      "https://example.com/page" → "example.com"
 *      "info@barclays.com" → "barclays.com"
 */
function extractDomainFromText(text: string): string | null {
  const trimmed = text.trim()

  // Check if it looks like a URL (has :// or starts with www.)
  const urlMatch = trimmed.match(/(?:https?:\/\/)?(?:www\.)?([a-z0-9.-]+\.[a-z]{2,})/i)
  if (urlMatch) {
    return urlMatch[1].toLowerCase()
  }

  // Check if it looks like an email address
  const emailMatch = trimmed.match(/@([a-z0-9.-]+\.[a-z]{2,})/i)
  if (emailMatch) {
    return emailMatch[1].toLowerCase()
  }

  // Check if it contains a domain-like pattern (word.tld)
  const domainMatch = trimmed.match(/([a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.(?:com|co\.uk|org|net|io|ch|de|fr|es|it|nl|be|at|lu|sg|hk|ae|sa|qa|bh))/i)
  if (domainMatch) {
    return domainMatch[1].toLowerCase()
  }

  return null
}

/**
 * Try fuzzy matching a domain against known company names.
 * e.g. "gbarkleys.com" → finds "barclay" substring → "barclays.com"
 */
function fuzzyMatchDomain(domain: string): string | null {
  const domainLower = domain.toLowerCase()

  // Strip the TLD to get the core name
  const coreName = domainLower.replace(/\.(com|co\.uk|org|net|io|ch|de|fr|es|it|nl|be|at|lu|sg|hk|ae|sa|qa|bh)$/, '')

  for (const [substring, canonical] of Object.entries(FUZZY_COMPANY_MAP)) {
    if (coreName.includes(substring)) {
      return canonical
    }
  }

  return null
}

/**
 * Guess a company domain from its name.
 * Checks: URLs/domains in the text → known mappings → fuzzy match → construct from name.
 */
export function guessDomain(orgName: string): string {
  const lower = orgName.toLowerCase().trim()

  // 1. Check if the name contains a URL or domain
  const extractedDomain = extractDomainFromText(orgName)
  if (extractedDomain) {
    // Try fuzzy matching the extracted domain to a known company
    const fuzzyResult = fuzzyMatchDomain(extractedDomain)
    if (fuzzyResult) return fuzzyResult
    // Otherwise use the extracted domain directly
    return extractedDomain
  }

  // 2. Check known mappings (exact)
  if (DOMAIN_MAP[lower]) return DOMAIN_MAP[lower]

  // 3. Try partial matches against known names
  for (const [key, domain] of Object.entries(DOMAIN_MAP)) {
    if (lower.includes(key) || key.includes(lower)) return domain
  }

  // 4. Try fuzzy matching the org name itself
  for (const [substring, canonical] of Object.entries(FUZZY_COMPANY_MAP)) {
    if (lower.replace(/[^a-z]/g, '').includes(substring)) return canonical
  }

  // 5. Construct from name: strip common words, join, add .com
  const slug = lower
    .replace(/\b(bank|group|international|private|wealth|management|asset|capital)\b/g, '')
    .replace(/[^a-z0-9]+/g, '')
    .trim()

  return slug ? `${slug}.com` : ''
}

/**
 * Get logo URL for a domain via Google's favicon service.
 * Returns 128x128 PNGs, no API key needed.
 * (Clearbit logo API was shut down after HubSpot acquisition)
 */
export function getLogoUrl(domain: string, size = 128): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

/**
 * Generate an initials-based SVG placeholder as a data URL
 */
export function getInitialsPlaceholder(orgName: string, bgColor = '#0D7377'): string {
  const initials = orgName
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^(the|of|and|&)$/i.test(w))
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
    <rect width="128" height="128" rx="16" fill="${bgColor}"/>
    <text x="64" y="64" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="48">${initials}</text>
  </svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/**
 * Resolve logo URL for an organization.
 * Returns Google favicon URL + fallback initials SVG.
 */
export function resolveLogoUrl(orgName: string): { logoUrl: string; fallbackDataUrl: string; domain: string } {
  const domain = guessDomain(orgName)
  return {
    logoUrl: domain ? getLogoUrl(domain) : '',
    fallbackDataUrl: getInitialsPlaceholder(orgName),
    domain,
  }
}
