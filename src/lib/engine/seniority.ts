import type { SeniorityLevel } from '@/types'

// Seniority scores for hierarchy ordering
export const SENIORITY_SCORES: Record<SeniorityLevel, number> = {
  'board': 100,
  'c-suite': 90,
  'evp': 80,
  'svp': 75,
  'vp': 70,
  'sr-director': 65,
  'director': 60,
  'sr-manager': 50,
  'manager': 40,
  'lead': 35,
  'senior-ic': 30,
  'ic': 20,
  'unknown': 0,
}

// 200+ synonym map for title normalization
const TITLE_SYNONYMS: Record<string, string> = {
  // Board level
  'chairman': 'Chairman of the Board',
  'chairwoman': 'Chairman of the Board',
  'chairperson': 'Chairman of the Board',
  'chair': 'Chairman of the Board',
  'board member': 'Board Member',
  'board director': 'Board Director',
  'non-executive director': 'Non-Executive Director',
  'ned': 'Non-Executive Director',

  // C-Suite
  'ceo': 'Chief Executive Officer',
  'chief executive officer': 'Chief Executive Officer',
  'chief executive': 'Chief Executive Officer',
  'coo': 'Chief Operating Officer',
  'chief operating officer': 'Chief Operating Officer',
  'cfo': 'Chief Financial Officer',
  'chief financial officer': 'Chief Financial Officer',
  'cto': 'Chief Technology Officer',
  'chief technology officer': 'Chief Technology Officer',
  'chief tech officer': 'Chief Technology Officer',
  'cmo': 'Chief Marketing Officer',
  'chief marketing officer': 'Chief Marketing Officer',
  'cro': 'Chief Revenue Officer',
  'chief revenue officer': 'Chief Revenue Officer',
  'cio': 'Chief Information Officer',
  'chief information officer': 'Chief Information Officer',
  'ciso': 'Chief Information Security Officer',
  'chief information security officer': 'Chief Information Security Officer',
  'cpo': 'Chief Product Officer',
  'chief product officer': 'Chief Product Officer',
  'chief people officer': 'Chief People Officer',
  'chro': 'Chief Human Resources Officer',
  'chief human resources officer': 'Chief Human Resources Officer',
  'chief hr officer': 'Chief Human Resources Officer',
  'cdo': 'Chief Data Officer',
  'chief data officer': 'Chief Data Officer',
  'chief digital officer': 'Chief Digital Officer',
  'cco': 'Chief Commercial Officer',
  'chief commercial officer': 'Chief Commercial Officer',
  'chief compliance officer': 'Chief Compliance Officer',
  'chief communications officer': 'Chief Communications Officer',
  'clo': 'Chief Legal Officer',
  'chief legal officer': 'Chief Legal Officer',
  'general counsel': 'General Counsel',
  'gc': 'General Counsel',
  'president': 'President',
  'managing director': 'Managing Director',
  'md': 'Managing Director',
  'gm': 'General Manager',
  'general manager': 'General Manager',
  'partner': 'Partner',
  'managing partner': 'Managing Partner',
  'founding partner': 'Founding Partner',

  // EVP
  'evp': 'Executive Vice President',
  'executive vice president': 'Executive Vice President',
  'exec vp': 'Executive Vice President',
  'executive vp': 'Executive Vice President',

  // SVP
  'svp': 'Senior Vice President',
  'senior vice president': 'Senior Vice President',
  'sr vice president': 'Senior Vice President',
  'sr vp': 'Senior Vice President',
  'senior vp': 'Senior Vice President',

  // VP
  'vp': 'Vice President',
  'vice president': 'Vice President',
  'vp of engineering': 'Vice President of Engineering',
  'vp engineering': 'Vice President of Engineering',
  'vp eng': 'Vice President of Engineering',
  'vp of product': 'Vice President of Product',
  'vp product': 'Vice President of Product',
  'vp of sales': 'Vice President of Sales',
  'vp sales': 'Vice President of Sales',
  'vp of marketing': 'Vice President of Marketing',
  'vp marketing': 'Vice President of Marketing',
  'vp of finance': 'Vice President of Finance',
  'vp finance': 'Vice President of Finance',
  'vp of hr': 'Vice President of Human Resources',
  'vp of human resources': 'Vice President of Human Resources',
  'vp of operations': 'Vice President of Operations',
  'vp operations': 'Vice President of Operations',
  'vp ops': 'Vice President of Operations',
  'vp of technology': 'Vice President of Technology',
  'vp technology': 'Vice President of Technology',
  'vp of design': 'Vice President of Design',
  'vp design': 'Vice President of Design',
  'vp of data': 'Vice President of Data',
  'vp data': 'Vice President of Data',

  // Senior Director
  'sr director': 'Senior Director',
  'senior director': 'Senior Director',
  'sr. director': 'Senior Director',

  // Director
  'director': 'Director',
  'dir': 'Director',
  'director of engineering': 'Director of Engineering',
  'dir of engineering': 'Director of Engineering',
  'dir eng': 'Director of Engineering',
  'engineering director': 'Director of Engineering',
  'director of product': 'Director of Product',
  'product director': 'Director of Product',
  'director of sales': 'Director of Sales',
  'sales director': 'Director of Sales',
  'director of marketing': 'Director of Marketing',
  'marketing director': 'Director of Marketing',
  'director of finance': 'Director of Finance',
  'finance director': 'Director of Finance',
  'director of hr': 'Director of Human Resources',
  'hr director': 'Director of Human Resources',
  'director of operations': 'Director of Operations',
  'operations director': 'Director of Operations',
  'director of technology': 'Director of Technology',
  'technology director': 'Director of Technology',
  'director of design': 'Director of Design',
  'design director': 'Director of Design',
  'creative director': 'Creative Director',
  'art director': 'Art Director',
  'director of data': 'Director of Data',
  'data director': 'Director of Data',
  'director of analytics': 'Director of Analytics',
  'analytics director': 'Director of Analytics',

  // Senior Manager
  'sr manager': 'Senior Manager',
  'senior manager': 'Senior Manager',
  'sr. manager': 'Senior Manager',
  'senior engineering manager': 'Senior Engineering Manager',
  'sr engineering manager': 'Senior Engineering Manager',
  'senior product manager': 'Senior Product Manager',
  'sr product manager': 'Senior Product Manager',
  'senior project manager': 'Senior Project Manager',
  'sr project manager': 'Senior Project Manager',

  // Manager
  'manager': 'Manager',
  'mgr': 'Manager',
  'engineering manager': 'Engineering Manager',
  'eng manager': 'Engineering Manager',
  'eng mgr': 'Engineering Manager',
  'product manager': 'Product Manager',
  'pm': 'Product Manager',
  'project manager': 'Project Manager',
  'program manager': 'Program Manager',
  'people manager': 'People Manager',
  'hiring manager': 'Hiring Manager',
  'account manager': 'Account Manager',
  'sales manager': 'Sales Manager',
  'marketing manager': 'Marketing Manager',
  'operations manager': 'Operations Manager',
  'office manager': 'Office Manager',
  'hr manager': 'HR Manager',
  'finance manager': 'Finance Manager',
  'it manager': 'IT Manager',
  'delivery manager': 'Delivery Manager',

  // Lead
  'lead': 'Lead',
  'team lead': 'Team Lead',
  'tech lead': 'Tech Lead',
  'technical lead': 'Technical Lead',
  'design lead': 'Design Lead',
  'engineering lead': 'Engineering Lead',
  'product lead': 'Product Lead',
  'qa lead': 'QA Lead',
  'frontend lead': 'Frontend Lead',
  'backend lead': 'Backend Lead',
  'data lead': 'Data Lead',
  'principal': 'Principal',
  'principal engineer': 'Principal Engineer',
  'principal designer': 'Principal Designer',
  'principal architect': 'Principal Architect',
  'staff engineer': 'Staff Engineer',
  'staff designer': 'Staff Designer',
  'architect': 'Architect',
  'solutions architect': 'Solutions Architect',
  'enterprise architect': 'Enterprise Architect',
  'head of': 'Head of',
  'head': 'Head',

  // Senior IC
  'senior': 'Senior',
  'sr': 'Senior',
  'sr.': 'Senior',
  'senior engineer': 'Senior Engineer',
  'sr engineer': 'Senior Engineer',
  'sr. engineer': 'Senior Engineer',
  'senior software engineer': 'Senior Software Engineer',
  'sr software engineer': 'Senior Software Engineer',
  'senior developer': 'Senior Developer',
  'sr developer': 'Senior Developer',
  'senior designer': 'Senior Designer',
  'sr designer': 'Senior Designer',
  'senior analyst': 'Senior Analyst',
  'sr analyst': 'Senior Analyst',
  'senior consultant': 'Senior Consultant',
  'sr consultant': 'Senior Consultant',
  'senior associate': 'Senior Associate',
  'sr associate': 'Senior Associate',
  'senior accountant': 'Senior Accountant',

  // IC
  'engineer': 'Engineer',
  'software engineer': 'Software Engineer',
  'swe': 'Software Engineer',
  'developer': 'Developer',
  'dev': 'Developer',
  'software developer': 'Software Developer',
  'frontend engineer': 'Frontend Engineer',
  'frontend developer': 'Frontend Developer',
  'backend engineer': 'Backend Engineer',
  'backend developer': 'Backend Developer',
  'fullstack engineer': 'Full Stack Engineer',
  'full stack engineer': 'Full Stack Engineer',
  'full-stack engineer': 'Full Stack Engineer',
  'devops engineer': 'DevOps Engineer',
  'sre': 'Site Reliability Engineer',
  'site reliability engineer': 'Site Reliability Engineer',
  'qa engineer': 'QA Engineer',
  'quality assurance engineer': 'QA Engineer',
  'data engineer': 'Data Engineer',
  'data scientist': 'Data Scientist',
  'data analyst': 'Data Analyst',
  'ml engineer': 'ML Engineer',
  'machine learning engineer': 'ML Engineer',
  'designer': 'Designer',
  'ux designer': 'UX Designer',
  'ui designer': 'UI Designer',
  'ux/ui designer': 'UX/UI Designer',
  'product designer': 'Product Designer',
  'graphic designer': 'Graphic Designer',
  'analyst': 'Analyst',
  'business analyst': 'Business Analyst',
  'ba': 'Business Analyst',
  'consultant': 'Consultant',
  'associate': 'Associate',
  'coordinator': 'Coordinator',
  'specialist': 'Specialist',
  'executive assistant': 'Executive Assistant',
  'ea': 'Executive Assistant',
  'pa': 'Personal Assistant',
  'personal assistant': 'Personal Assistant',
  'assistant': 'Assistant',
  'admin': 'Administrator',
  'administrator': 'Administrator',
  'intern': 'Intern',
  'trainee': 'Trainee',
  'graduate': 'Graduate',
  'apprentice': 'Apprentice',
  'contractor': 'Contractor',
  'freelancer': 'Freelancer',
  'temp': 'Temporary Staff',
  'recruiter': 'Recruiter',
  'sourcer': 'Sourcer',
  'researcher': 'Researcher',
  'accountant': 'Accountant',
  'controller': 'Controller',
  'treasurer': 'Treasurer',
  'buyer': 'Buyer',
  'planner': 'Planner',
}

// Seniority patterns for classification
const SENIORITY_PATTERNS: [RegExp, SeniorityLevel][] = [
  [/\b(chairman|chairwoman|chairperson|board\s+(member|director)|non-executive\s+director|ned)\b/i, 'board'],
  [/\b(chief\s+\w+\s+officer|c[a-z]o|president|managing\s+director|general\s+counsel)\b/i, 'c-suite'],
  [/\b(executive\s+vice\s+president|exec\s+vp|evp)\b/i, 'evp'],
  [/\b(senior\s+vice\s+president|sr\.?\s+vp|svp)\b/i, 'svp'],
  [/\b(vice\s+president|vp)\b/i, 'vp'],
  [/\b(senior\s+director|sr\.?\s+director)\b/i, 'sr-director'],
  [/\b(director|head\s+of)\b/i, 'director'],
  [/\b(senior\s+(manager|engineering\s+manager|product\s+manager|project\s+manager))\b/i, 'sr-manager'],
  [/\b(manager|mgr)\b/i, 'manager'],
  [/\b(lead|principal|staff|architect)\b/i, 'lead'],
  [/\b(senior|sr\.?)\b/i, 'senior-ic'],
  // Everything else is IC
]

/**
 * Normalize a raw job title to a standard form
 */
export function normalizeTitle(rawTitle: string): string {
  if (!rawTitle || !rawTitle.trim()) return rawTitle

  const cleaned = rawTitle.trim().toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:]+$/, '')

  // Try exact match first
  if (TITLE_SYNONYMS[cleaned]) {
    return TITLE_SYNONYMS[cleaned]
  }

  // Try removing common prefixes/suffixes
  const withoutParens = cleaned.replace(/\s*\(.*?\)\s*/g, ' ').trim()
  if (TITLE_SYNONYMS[withoutParens]) {
    return TITLE_SYNONYMS[withoutParens]
  }

  // Try partial matching for "X of Y" patterns
  // e.g. "vp of customer success" → keep as-is but capitalize properly
  for (const [key, value] of Object.entries(TITLE_SYNONYMS)) {
    if (cleaned.startsWith(key + ' of ') || cleaned.startsWith(key + ' - ')) {
      const suffix = rawTitle.trim().slice(key.length).trim()
      return value + ' ' + suffix.charAt(0).toUpperCase() + suffix.slice(1)
    }
  }

  // Title case the original if no match
  return rawTitle.trim()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Determine the seniority level from a title
 */
export function classifySeniority(title: string): SeniorityLevel {
  if (!title) return 'unknown'

  const lower = title.toLowerCase()

  for (const [pattern, level] of SENIORITY_PATTERNS) {
    if (pattern.test(lower)) {
      return level
    }
  }

  return 'ic'
}

/**
 * Get numeric seniority score for ordering
 */
export function getSeniorityScore(level: SeniorityLevel): number {
  return SENIORITY_SCORES[level] ?? 0
}

/**
 * Extract likely department from a title
 */
export function inferDepartmentFromTitle(title: string): string | null {
  const lower = title.toLowerCase()

  const DEPT_KEYWORDS: Record<string, string[]> = {
    'Engineering': ['engineering', 'software', 'developer', 'devops', 'sre', 'frontend', 'backend', 'fullstack', 'full stack', 'full-stack', 'tech', 'architect', 'qa', 'quality'],
    'Product': ['product'],
    'Design': ['design', 'ux', 'ui', 'creative', 'art director'],
    'Marketing': ['marketing', 'growth', 'brand', 'content', 'seo', 'communications', 'pr'],
    'Sales': ['sales', 'account executive', 'business development', 'bdr', 'sdr', 'revenue'],
    'Finance': ['finance', 'financial', 'accounting', 'accountant', 'controller', 'treasurer', 'cfo'],
    'Human Resources': ['hr', 'human resources', 'people', 'talent', 'recruiting', 'recruiter', 'sourcer'],
    'Operations': ['operations', 'ops', 'logistics', 'supply chain', 'procurement'],
    'Legal': ['legal', 'counsel', 'compliance', 'regulatory'],
    'Data': ['data', 'analytics', 'ml', 'machine learning', 'ai', 'intelligence'],
    'IT': ['it ', 'information technology', 'infrastructure', 'security', 'ciso', 'cio'],
    'Customer Success': ['customer success', 'customer support', 'support', 'client'],
  }

  for (const [dept, keywords] of Object.entries(DEPT_KEYWORDS)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        return dept
      }
    }
  }

  return null
}
