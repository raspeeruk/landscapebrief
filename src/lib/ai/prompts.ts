export const COLUMN_DETECTION_PROMPT = `You are analyzing CSV headers to map them to standard organizational data fields.

Given these CSV column headers, determine which standard field each maps to.

Standard fields:
- name: Person's full name
- title: Job title / position
- department: Department, team, or division
- reports_to: Manager / supervisor name or ID
- email: Email address
- location: Office location / city / region
- employee_id: Employee ID / staff number
- ignore: Not relevant to org structure

Return a JSON object mapping each header to a standard field.
Be generous with mapping — headers like "Mgr", "Line Mgr", "Supervisor" should all map to "reports_to".
Headers like "Job Title", "Position", "Role", "Designation" should all map to "title".

CSV Headers: {headers}

Respond with ONLY a JSON object like:
{
  "Header Name 1": "name",
  "Header Name 2": "title",
  ...
}`

export const TITLE_DISAMBIGUATION_PROMPT = `You are a human resources expert analyzing job titles to determine organizational hierarchy.

Given this ambiguous job title, determine:
1. The most likely normalized title
2. The seniority level (one of: board, c-suite, evp, svp, vp, sr-director, director, sr-manager, manager, lead, senior-ic, ic)
3. The most likely department

Title: "{title}"
Context: This person works at a company where other titles include: {otherTitles}

Respond with ONLY a JSON object:
{
  "normalizedTitle": "...",
  "seniorityLevel": "...",
  "department": "..."
}`

export const HIERARCHY_INFERENCE_PROMPT = `You are an organizational design expert. Given a list of people with their titles and departments, determine the most likely reporting relationships for people who don't have an explicit manager.

People without managers:
{orphans}

People with known positions:
{knownPeople}

For each orphan, suggest who they most likely report to and your confidence (high/medium/low).

Respond with ONLY a JSON array:
[
  {
    "personId": "...",
    "reportsToId": "...",
    "confidence": "medium",
    "reasoning": "..."
  }
]`
