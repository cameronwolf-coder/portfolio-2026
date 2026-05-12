export type AgentMode = "Automated" | "Human-approved";
export type AgentTier = "Visibility" | "Demand Engine" | "Owned & Earned";

export interface Agent {
  id: string;
  name: string;
  tier: AgentTier;
  mode: AgentMode;
  description: string;
  scope: string[];
  monthlyPrice: number;
  buildHours: number;
  stack: string;
  passthrough: string;
}

export const AGENTS: Agent[] = [
  {
    id: "attribution",
    name: "Attribution",
    tier: "Visibility",
    mode: "Automated",
    description:
      "Unifies clicks, calls, walk-ins, broker intros, and CRM closes into one source-to-contract picture.",
    scope: [
      "Server-side pixel + UTM normalization",
      "Call-tracking ingest",
      "CRM event reconciliation",
      "Source-of-truth dashboards",
    ],
    monthlyPrice: 2500,
    buildHours: 80,
    stack: "FastAPI, Postgres+pgvector, Segment-style ingest",
    passthrough: "CallRail, HubSpot",
  },
  {
    id: "performance-reporting",
    name: "Performance Reporting",
    tier: "Visibility",
    mode: "Automated",
    description:
      "Weekly and monthly executive reports at listing and brand level. Replaces vendor decks.",
    scope: [
      "Auto-generated weekly exec brief",
      "Per-listing P&L view",
      "Anomaly call-outs",
      "PDF + email + Notion delivery",
    ],
    monthlyPrice: 1500,
    buildHours: 50,
    stack: "Celery cron, headless HTML→PDF",
    passthrough: "—",
  },
  {
    id: "comp-intel",
    name: "Competitive Intel",
    tier: "Visibility",
    mode: "Automated",
    description:
      "Monitors comparable Austin developers' channels, creative, pricing, and broker incentives.",
    scope: [
      "Competitor site + listing crawl",
      "Ad library monitoring",
      "Pricing & incentive change alerts",
      "Weekly digest",
    ],
    monthlyPrice: 1500,
    buildHours: 60,
    stack: "Browser-harness, Exa, Postgres diff store",
    passthrough: "Exa, DataForSEO",
  },
  {
    id: "spend-architecture",
    name: "Spend Architecture",
    tier: "Demand Engine",
    mode: "Automated",
    description:
      "Enforces the brand-vs-listing budget split. Same buyer is not paid for multiple times across overlapping listings.",
    scope: [
      "Brand layer + listing-burst budget rules",
      "Audience exclusion management",
      "Daily pacing checks",
      "Reallocation recommendations",
    ],
    monthlyPrice: 2000,
    buildHours: 70,
    stack: "FastAPI, Google/Meta APIs",
    passthrough: "—",
  },
  {
    id: "media-buying",
    name: "Media Buying",
    tier: "Demand Engine",
    mode: "Automated",
    description:
      "Runs day-to-day Google, Meta, and programmatic. Pacing, audiences, creative rotation, bid adjustments.",
    scope: [
      "Daily bid + budget optimization",
      "Creative rotation & fatigue detection",
      "Audience first-party sync",
      "Cross-platform reallocation",
    ],
    monthlyPrice: 3000,
    buildHours: 110,
    stack: "FastAPI, Google Ads API, Meta API",
    passthrough: "—",
  },
  {
    id: "lead-qualification",
    name: "Lead Qualification",
    tier: "Demand Engine",
    mode: "Automated",
    description:
      "Site chatbot. Triages inbound by timeline, budget, financing, location. Books tours and writes a structured CRM note.",
    scope: [
      "Conversational qualifier on site",
      "Calendar booking",
      "CRM enrichment & tagging",
      "After-hours routing",
    ],
    monthlyPrice: 1500,
    buildHours: 60,
    stack: "Claude Haiku 4.5, Calendly API",
    passthrough: "Calendly",
  },
  {
    id: "email-nurture",
    name: "Email Nurture",
    tier: "Demand Engine",
    mode: "Automated",
    description:
      "Segmented programs for HNW prospects, relocation buyers, wealth managers, brokers, past open-house attendees.",
    scope: [
      "Per-segment journey design",
      "Auto-personalized copy",
      "Engagement scoring",
      "Suppression + deliverability hygiene",
    ],
    monthlyPrice: 1500,
    buildHours: 60,
    stack: "FastAPI, SendGrid, HubSpot",
    passthrough: "SendGrid, HubSpot",
  },
  {
    id: "content-seo",
    name: "Content & SEO",
    tier: "Owned & Earned",
    mode: "Automated",
    description:
      "Market reports, neighborhood guides, project pages targeting searches HNW buyers actually run.",
    scope: [
      "Keyword + topic research",
      "Article drafts (CMS-ready)",
      "Internal linking",
      "Refresh cadence",
    ],
    monthlyPrice: 2500,
    buildHours: 90,
    stack: "Claude Sonnet 4.6, DataForSEO",
    passthrough: "DataForSEO",
  },
  {
    id: "creative-production",
    name: "Creative Production",
    tier: "Owned & Earned",
    mode: "Automated",
    description:
      "Listing copy, ad variants, social captions, image and tour packaging.",
    scope: [
      "Ad variants per channel",
      "Listing copy + social captions",
      "Image generation (Flux)",
      "Brand-voice templates",
    ],
    monthlyPrice: 2000,
    buildHours: 70,
    stack: "Claude Sonnet 4.6, Replicate (Flux), Roomagen",
    passthrough: "Replicate, Roomagen",
  },
  {
    id: "brand-qa",
    name: "Brand QA",
    tier: "Owned & Earned",
    mode: "Human-approved",
    description:
      "Every piece of agent-produced creative checked for accuracy, voice, and pricing consistency before publishing.",
    scope: [
      "Voice + tone enforcement",
      "Pricing & legal fact-check",
      "Image rights audit",
      "Approval workflow",
    ],
    monthlyPrice: 1000,
    buildHours: 40,
    stack: "Paperclip routine, Claude judge",
    passthrough: "—",
  },
  {
    id: "pr-earned",
    name: "PR & Earned Media",
    tier: "Owned & Earned",
    mode: "Human-approved",
    description:
      "Drafts pitches and follow-ups to Mansion Global, Tribeza, Austin Business Journal, Texas Monthly, Architectural Digest, Robb Report.",
    scope: [
      "Journalist database upkeep",
      "Pitch drafts per outlet",
      "Follow-up cadence",
      "Coverage tracking",
    ],
    monthlyPrice: 1500,
    buildHours: 50,
    stack: "Paperclip routine, Hunter, Apollo",
    passthrough: "Hunter, Apollo",
  },
  {
    id: "broker-outreach",
    name: "Broker Outreach",
    tier: "Owned & Earned",
    mode: "Human-approved",
    description:
      "Live database of top Austin luxury agents. Drafts personalized outreach for bonus offers, exclusive previews, inventory updates.",
    scope: [
      "Top Austin luxury agent index",
      "Personalized outreach drafts",
      "Bonus-offer campaigns",
      "Tour & preview RSVPs",
    ],
    monthlyPrice: 1500,
    buildHours: 60,
    stack: "Paperclip routine, Apollo, Smartlead",
    passthrough: "Apollo, Smartlead",
  },
];

export const FULL_STACK_BUNDLE_PRICE = 12000;

export interface BundleOption {
  id: string;
  name: string;
  description: string;
  agentIds: string[];
  price: number;
}

export const BUNDLES: BundleOption[] = [
  {
    id: "visibility",
    name: "Visibility starter",
    description: "See where today's spend goes and what produces contracts. Foundation for everything else.",
    agentIds: ["attribution", "performance-reporting", "comp-intel"],
    price: 4500,
  },
  {
    id: "demand-engine",
    name: "Demand engine",
    description: "Visibility + the agents that buy, qualify, and nurture. Day-to-day marketing operations.",
    agentIds: [
      "attribution",
      "performance-reporting",
      "spend-architecture",
      "media-buying",
      "lead-qualification",
      "email-nurture",
    ],
    price: 9000,
  },
  {
    id: "full-stack",
    name: "Full stack",
    description: "All twelve agents under one orchestration layer. Replaces a typical agency + martech retainer footprint.",
    agentIds: AGENTS.map((a) => a.id),
    price: FULL_STACK_BUNDLE_PRICE,
  },
];

// Discovery — sections of focused questions Cameron walks Bill through.
export interface DiscoveryOption {
  value: string;
  label: string;
}

export interface DiscoveryQuestion {
  id: string;
  prompt: string;
  helper?: string;
  type: "single" | "multi" | "text";
  options?: DiscoveryOption[];
}

export interface DiscoverySection {
  id: string;
  index: string;
  title: string;
  summary: string;
  questions: DiscoveryQuestion[];
}

export const DISCOVERY: DiscoverySection[] = [
  {
    id: "crm",
    index: "01",
    title: "CRM & contact data",
    summary: "Where lead and deal records live, and how clean they are today.",
    questions: [
      {
        id: "crm-platform",
        prompt: "What system holds your lead and deal records?",
        type: "single",
        options: [
          { value: "hubspot", label: "HubSpot" },
          { value: "salesforce", label: "Salesforce" },
          { value: "follow-up-boss", label: "Follow Up Boss" },
          { value: "kvcore", label: "kvCORE" },
          { value: "sierra", label: "Sierra Interactive" },
          { value: "spreadsheet", label: "Spreadsheets / no central CRM" },
        ],
      },
      {
        id: "crm-fields",
        prompt: "Which fields are tracked consistently on every lead?",
        type: "multi",
        options: [
          { value: "source", label: "Source / channel" },
          { value: "budget", label: "Budget range" },
          { value: "timeline", label: "Purchase timeline" },
          { value: "financing", label: "Financing status" },
          { value: "broker", label: "Referring broker" },
          { value: "listing", label: "Listing of interest" },
        ],
      },
      {
        id: "crm-stages",
        prompt: "Anything special about your pipeline stages?",
        helper: "Custom stages, broker side-pipelines, hand-offs to title.",
        type: "text",
      },
    ],
  },
  {
    id: "call-tracking",
    index: "02",
    title: "Call tracking & inbound",
    summary: "How phone, walk-in, and showing-floor inquiries are captured.",
    questions: [
      {
        id: "call-platform",
        prompt: "What captures inbound phone calls?",
        type: "single",
        options: [
          { value: "callrail", label: "CallRail" },
          { value: "callsource", label: "CallSource" },
          { value: "ringcentral", label: "RingCentral" },
          { value: "cell", label: "Personal cell lines" },
          { value: "none", label: "Nothing dedicated" },
        ],
      },
      {
        id: "call-routing",
        prompt: "Who answers calls today?",
        type: "single",
        options: [
          { value: "agent", label: "Listing agent" },
          { value: "front-desk", label: "Sales gallery front desk" },
          { value: "broker", label: "Outside broker" },
          { value: "voicemail", label: "Voicemail / callback" },
        ],
      },
      {
        id: "call-recording",
        prompt: "Are inbound calls recorded?",
        type: "single",
        options: [
          { value: "yes", label: "Yes, all of them" },
          { value: "some", label: "Some, ad-hoc" },
          { value: "no", label: "No" },
          { value: "unsure", label: "Unsure" },
        ],
      },
    ],
  },
  {
    id: "email",
    index: "03",
    title: "Email & marketing automation",
    summary: "Outbound nurture, broadcast, and transactional email.",
    questions: [
      {
        id: "email-platform",
        prompt: "What sends marketing email today?",
        type: "multi",
        options: [
          { value: "hubspot", label: "HubSpot" },
          { value: "mailchimp", label: "Mailchimp" },
          { value: "klaviyo", label: "Klaviyo" },
          { value: "constant-contact", label: "Constant Contact" },
          { value: "gmail", label: "Gmail / personal accounts" },
          { value: "none", label: "Nothing structured" },
        ],
      },
      {
        id: "email-segments",
        prompt: "What lists or segments exist today?",
        type: "text",
        helper: "HNW prospects, past tours, brokers, wealth advisors, etc.",
      },
      {
        id: "email-deliverability",
        prompt: "Any known deliverability issues?",
        type: "single",
        options: [
          { value: "clean", label: "Clean — no flags" },
          { value: "some-bounces", label: "Some bounce / spam complaints" },
          { value: "blacklist", label: "Blacklist or domain reputation issues" },
          { value: "unknown", label: "Unknown" },
        ],
      },
    ],
  },
  {
    id: "paid-ads",
    index: "04",
    title: "Paid advertising",
    summary: "Where ad budget flows today and who controls it.",
    questions: [
      {
        id: "ad-channels",
        prompt: "Which paid channels are live right now?",
        type: "multi",
        options: [
          { value: "google-search", label: "Google Search" },
          { value: "google-pmax", label: "Google Performance Max" },
          { value: "meta", label: "Meta (Facebook + Instagram)" },
          { value: "programmatic", label: "Programmatic display" },
          { value: "youtube", label: "YouTube" },
          { value: "print", label: "Print / OOH" },
          { value: "luxury-portals", label: "Luxury portal placements" },
        ],
      },
      {
        id: "ad-ownership",
        prompt: "Who runs the ad accounts today?",
        type: "single",
        options: [
          { value: "internal", label: "In-house team" },
          { value: "agency", label: "Outside agency" },
          { value: "agency-multiple", label: "Multiple agencies (split by channel)" },
          { value: "self", label: "You, directly" },
        ],
      },
      {
        id: "ad-spend",
        prompt: "Approximate monthly paid media spend across all listings?",
        type: "single",
        options: [
          { value: "<10k", label: "Under $10K" },
          { value: "10-25k", label: "$10K – $25K" },
          { value: "25-75k", label: "$25K – $75K" },
          { value: "75-150k", label: "$75K – $150K" },
          { value: "150k+", label: "$150K+" },
        ],
      },
    ],
  },
  {
    id: "portals",
    index: "05",
    title: "Listing portals",
    summary: "Where listings are syndicated and how leads come back.",
    questions: [
      {
        id: "portals-active",
        prompt: "Which luxury portals carry your listings?",
        type: "multi",
        options: [
          { value: "mansion-global", label: "Mansion Global" },
          { value: "jameseditions", label: "JamesEdition" },
          { value: "luxury-portfolio", label: "Luxury Portfolio International" },
          { value: "robb-report", label: "Robb Report Real Estate" },
          { value: "wsj", label: "WSJ Mansion" },
          { value: "local-mls", label: "Local MLS (ABoR/CTXMLS)" },
        ],
      },
      {
        id: "portals-leads",
        prompt: "Do portal leads route back into your CRM cleanly?",
        type: "single",
        options: [
          { value: "yes", label: "Yes, with source tagging" },
          { value: "messy", label: "Yes but source data is messy" },
          { value: "email-only", label: "Email forwards only" },
          { value: "no", label: "No, manual entry" },
        ],
      },
    ],
  },
  {
    id: "cms",
    index: "06",
    title: "Website & CMS",
    summary: "How site content gets published and updated.",
    questions: [
      {
        id: "cms-platform",
        prompt: "What runs the marketing site?",
        type: "single",
        options: [
          { value: "wordpress", label: "WordPress" },
          { value: "webflow", label: "Webflow" },
          { value: "squarespace", label: "Squarespace" },
          { value: "custom", label: "Custom build" },
          { value: "unsure", label: "Not sure" },
        ],
      },
      {
        id: "cms-publishing",
        prompt: "Who publishes content today?",
        type: "single",
        options: [
          { value: "agency", label: "Outside agency" },
          { value: "internal", label: "In-house marketer" },
          { value: "ceo", label: "You / the CEO" },
          { value: "nobody", label: "Rarely updated" },
        ],
      },
      {
        id: "cms-cadence",
        prompt: "How often is new content published?",
        type: "single",
        options: [
          { value: "weekly", label: "Weekly or more" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
          { value: "ad-hoc", label: "Ad-hoc / rarely" },
        ],
      },
    ],
  },
  {
    id: "creative",
    index: "07",
    title: "Creative & content production",
    summary: "How copy, photography, and tours get made.",
    questions: [
      {
        id: "creative-source",
        prompt: "Where does ad and listing creative come from today?",
        type: "multi",
        options: [
          { value: "agency", label: "Marketing agency" },
          { value: "freelance", label: "Freelancers (copy + design)" },
          { value: "photographer", label: "Dedicated photographer" },
          { value: "internal", label: "In-house team" },
          { value: "ai", label: "AI tools (Midjourney/ChatGPT/etc.)" },
        ],
      },
      {
        id: "creative-tours",
        prompt: "Do listings get 3D tours?",
        type: "single",
        options: [
          { value: "matterport", label: "Yes, Matterport" },
          { value: "video", label: "Video walk-throughs" },
          { value: "photos-only", label: "Photos only" },
          { value: "mixed", label: "Mixed by listing" },
        ],
      },
    ],
  },
  {
    id: "pr-brokers",
    index: "08",
    title: "PR & broker network",
    summary: "Earned-media and outside-agent activation.",
    questions: [
      {
        id: "pr-firm",
        prompt: "Do you work with a PR firm?",
        type: "single",
        options: [
          { value: "retainer", label: "Yes, on retainer" },
          { value: "project", label: "Project-based" },
          { value: "in-house", label: "In-house only" },
          { value: "none", label: "Nothing structured" },
        ],
      },
      {
        id: "broker-base",
        prompt: "How many Austin luxury brokers are you actively in contact with?",
        type: "single",
        options: [
          { value: "<25", label: "Under 25" },
          { value: "25-100", label: "25 – 100" },
          { value: "100-500", label: "100 – 500" },
          { value: "500+", label: "500+" },
        ],
      },
      {
        id: "broker-incentives",
        prompt: "Do you offer broker bonuses or incentives?",
        type: "single",
        options: [
          { value: "always", label: "Always" },
          { value: "case-by-case", label: "Case by case" },
          { value: "rarely", label: "Rarely" },
          { value: "never", label: "Never" },
        ],
      },
    ],
  },
  {
    id: "reporting",
    index: "09",
    title: "Reporting & data access",
    summary: "What gets read today and what's locked behind agencies.",
    questions: [
      {
        id: "reporting-cadence",
        prompt: "How often do you get a marketing performance report?",
        type: "single",
        options: [
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
          { value: "ad-hoc", label: "Only when I ask" },
        ],
      },
      {
        id: "reporting-access",
        prompt: "Do you have direct admin access to ad accounts + analytics?",
        type: "single",
        options: [
          { value: "yes", label: "Yes, full admin" },
          { value: "view", label: "View-only" },
          { value: "agency", label: "Agency owns access" },
          { value: "unsure", label: "Unsure" },
        ],
      },
    ],
  },
  {
    id: "decision",
    index: "10",
    title: "Decision-making",
    summary: "Who signs off and how fast you can move.",
    questions: [
      {
        id: "decision-makers",
        prompt: "Who needs to approve a switch in marketing operations?",
        type: "text",
        helper: "Names and roles — CEO, CFO, board, partners.",
      },
      {
        id: "timeline",
        prompt: "Realistically, when would you want Phase 1 (visibility) live?",
        type: "single",
        options: [
          { value: "30d", label: "Within 30 days" },
          { value: "60d", label: "30 – 60 days" },
          { value: "90d", label: "60 – 90 days" },
          { value: "exploring", label: "Just exploring" },
        ],
      },
      {
        id: "blockers",
        prompt: "Anything that would block this from moving forward?",
        type: "text",
        helper: "Existing contracts, agency notice periods, internal politics, budget cycle.",
      },
    ],
  },
];
