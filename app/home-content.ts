export const principles = [
  {
    number: "01",
    title: "Business impact first",
    body: "A project earns space when it changes a revenue outcome: lead quality, conversion, response time, operating cost, retention, or expansion.",
  },
  {
    number: "02",
    title: "Real constraints",
    body: "Strong work includes incomplete data, conflicting systems, edge cases, human handoffs, and the decisions that made the system reliable.",
  },
  {
    number: "03",
    title: "The whole workflow",
    body: "Show the path from source to enrichment, scoring, routing, action, CRM update, and measurement. Hiring managers need to see the connective tissue.",
  },
] as const;

export const portfolioProjects = [
  {
    number: "01",
    title: "Lead scoring and routing",
    system: "Combine sources, enrich each record, score against the ICP, then route qualified accounts to the right owner with context intact.",
    outcome: "Better qualified conversion and shorter response time.",
  },
  {
    number: "02",
    title: "Intent-based prospecting",
    system: "Monitor buying signals such as site visits, hiring, funding, technology changes, and leadership moves, then trigger outreach while the signal is fresh.",
    outcome: "More relevant conversations with less wasted volume.",
  },
  {
    number: "03",
    title: "Personalized outreach at scale",
    system: "Research the prospect, generate useful talking points, sequence the message, and feed engagement back into the next decision.",
    outcome: "Higher reply rates without turning the copy into mail merge sludge.",
  },
  {
    number: "04",
    title: "Revenue analytics and attribution",
    system: "Connect campaign, sales, CRM, and product data so the team can see which work creates pipeline and which work just creates activity.",
    outcome: "Budget and GTM decisions tied to revenue evidence.",
  },
  {
    number: "05",
    title: "Customer health and expansion",
    system: "Combine usage, support, billing, and engagement signals to flag churn risk and surface expansion timing before the account goes quiet.",
    outcome: "More retained revenue and earlier expansion conversations.",
  },
] as const;

export const proof = [
  {
    href: "/case-studies/truv",
    company: "Truv",
    logo: "/logos/truv.svg",
    result: "GTM infrastructure from scratch",
    detail: "CRM architecture, lifecycle automation, enrichment, attribution, and AI-assisted GTM operations for a Series B fintech company.",
  },
  {
    href: "/case-studies/zappyride",
    company: "ZappyRide to J.D. Power",
    logo: "/logos/jdpower.svg",
    result: "Startup to acquisition",
    detail: "Built the brand, content engine, and category authority that supported 100% YoY revenue growth through acquisition.",
  },
  {
    href: "/case-studies/sweet-express",
    company: "Sweet Express",
    logo: "/logos/sweet-express.png",
    result: "400,000 first-year users",
    detail: "Recruitment, ecommerce, social, and content systems that turned an offline trucking company into a measurable digital operation.",
  },
] as const;

export const technicalProof = [
  ["Automation", "n8n, Clay, Pipedream, HubSpot Ops Hub"],
  ["Data and APIs", "REST, webhooks, TypeScript, Python"],
  ["Analytics", "SQL, BigQuery, ClickHouse, Hex"],
  ["Applied AI", "OpenAI, Claude, Firecrawl, agent workflows"],
] as const;

export const documentationSteps = [
  ["Problem", "Name the revenue bottleneck in plain language."],
  ["Decision", "Show the options, tradeoffs, and why you chose the path."],
  ["System", "Map the workflow from input through handoff and measurement."],
  ["Result", "Use the number that changed, plus what you learned when it broke."],
] as const;
