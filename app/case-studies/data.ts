import { Rocket, TrendingUp, Building2, RefreshCw, LucideIcon } from "lucide-react";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  icon: LucideIcon;
  accent: "maroon" | "teal";
  metrics: CaseStudyMetric[];
  situation: string;
  insight: string;
  action: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "zappyride",
    company: "ZappyRide → J.D. Power",
    role: "Director of Marketing",
    period: "April 2021 – May 2023",
    summary:
      "Built the brand, content engine, and growth strategy that helped an early-stage EV marketplace get acquired by J.D. Power.",
    icon: Rocket,
    accent: "maroon",
    metrics: [
      { value: "100%", label: "YoY Revenue" },
      { value: "EXIT", label: "Acquired by J.D. Power" },
      { value: "#1", label: "EV Content Authority" },
    ],
    situation:
      "ZappyRide was an early-stage EV marketplace with no brand awareness, entering a market dominated by legacy auto publishers like Edmunds, KBB, and Cars.com. The company had strong product — tools that helped consumers compare EVs and calculate total cost of ownership — but zero content presence, no editorial strategy, and no way to build trust with the buyers who needed it most.",
    insight:
      "Purchase anxiety — not price — was the real barrier to EV adoption. Consumers weren't comparison shopping; they were stuck at 'should I even consider an EV?' The incumbents were publishing specs and reviews, but nobody was creating the educational, trust-building content that moved buyers from curiosity to confidence. That gap was our opening: own the narrative, and you own the category.",
    action:
      "Built the brand from scratch — website, visual identity, and messaging architecture that positioned ZappyRide as the trusted EV authority, not just another listings site. Launched ZappyCast, an industry podcast that gave us a direct line to OEMs, dealers, and thought leaders. Created a content engine that published educational articles, buying guides, and cost-of-ownership tools at a pace the legacy publishers couldn't match. Drove 100% YoY revenue growth through organic and content-led channels while keeping acquisition costs near zero.",
    result:
      "ZappyRide was acquired by J.D. Power in May 2023. The brand positioning, content authority, and audience trust we built were direct contributors to acquisition value — J.D. Power wasn't just buying the product, they were buying the audience and the authority we'd created in the EV space.",
  },
  {
    slug: "sweet-express",
    company: "Sweet Express",
    role: "Director of Digital Marketing",
    period: "2019 – 2021",
    summary:
      "Grew a food brand from zero digital presence to 400K users in 12 months with $0 in ad spend.",
    icon: TrendingUp,
    accent: "teal",
    metrics: [
      { value: "2,000%", label: "Audience Growth" },
      { value: "400K", label: "First-Year Users" },
      { value: "$0", label: "Ad Spend" },
    ],
    situation:
      "Sweet Express was a food and consumer brand with no digital marketing presence — entirely reliant on word-of-mouth and local reputation. There was no website strategy, no content pipeline, no social media system, and no way to measure what was working. The brand had loyal customers but no scalable way to reach new ones.",
    insight:
      "The category had zero quality content. Nobody — not competitors, not media outlets, not influencers — was creating educational or entertainment content in the space. That meant a massive organic opportunity at $0 cost. If we built the content system first and let distribution follow, we could own the category conversation without spending a dollar on ads.",
    action:
      "Built a zero-touch content system from scratch: editorial calendar, production workflow, and distribution across every relevant channel. Launched a user portal that turned one-time visitors into repeat users. Managed social media to 15%+ engagement rates across 25K+ followers — well above industry benchmarks. Every piece of content was designed to educate, entertain, and convert, in that order.",
    result:
      "2,000% audience growth. 400,000 users in the first 12 months. $0 in ad spend. The content engine became the primary growth driver, proving that category-defining content beats paid acquisition when nobody else is creating anything worth reading.",
  },
  {
    slug: "truv",
    company: "Truv · Series B SaaS",
    role: "Senior Growth Marketing Manager",
    period: "2024 – Present",
    summary:
      "Building the demand gen and ABM engine for a Series B compliance SaaS targeting enterprise buyers.",
    icon: Building2,
    accent: "maroon",
    metrics: [
      { value: "B2B", label: "Enterprise Pipeline" },
      { value: "ABM", label: "Account-Based Strategy" },
      { value: "AI", label: "Powered Automation" },
    ],
    situation:
      "Truv is a Series B verification and compliance SaaS company that needs to accelerate enterprise pipeline. The product is technically complex — income and employment verification for financial services — and the buyer persona (risk, compliance, and operations leaders) requires high-trust, low-friction engagement before they'll take a meeting.",
    insight:
      "Enterprise buyers of compliance tools need trust signals and simplified messaging before outbound works. You can't cold-call a compliance officer with a feature list. The positioning needed to translate complex technical capabilities into clear business outcomes, and the demand gen system needed to build trust at scale before asking for the meeting.",
    action:
      "Built the messaging framework from scratch — translating technical verification capabilities into clear value propositions for risk, compliance, and ops buyers. Designed and launched ABM campaigns targeting named enterprise accounts. Introduced AI-powered automation to scale marketing workflows without adding headcount — from content personalization to lead scoring to campaign optimization.",
    result:
      "Currently building — the messaging framework, ABM infrastructure, and AI-powered workflows are in market and generating pipeline. The approach is designed to compound: every campaign improves targeting accuracy, every content piece builds domain authority, and every automation reduces the cost of the next conversion.",
  },
  {
    slug: "inspiration-mobility",
    company: "Inspiration Mobility",
    role: "Marketing Manager",
    period: "2023 – 2024",
    summary:
      "Overhauled marketing infrastructure and introduced AI-powered workflows for an EV infrastructure company.",
    icon: RefreshCw,
    accent: "teal",
    metrics: [
      { value: "25%", label: "Marketing ROI Increase" },
      { value: "30%", label: "Engagement Increase" },
      { value: "0", label: "Manual Campaigns" },
    ],
    situation:
      "Inspiration Mobility is an electric vehicle infrastructure company that was running marketing on legacy tools with manual processes. Campaigns took days to build, analytics were fragmented across disconnected platforms, and the team was spending more time on execution mechanics than strategy. The marketing operation was a bottleneck, not an accelerator.",
    insight:
      "The bottleneck wasn't strategy — it was infrastructure. The team had good ideas but no system to execute them at speed. Every campaign required manual assembly, every report required manual data pulls, and every optimization required starting from scratch. Fix the infrastructure, and strategy execution becomes instant instead of incremental.",
    action:
      "Led a complete Salesforce Marketing Cloud migration — consolidating fragmented tools into a single platform with unified data, automated workflows, and real-time analytics. Deployed advanced attribution modeling to finally connect marketing spend to revenue outcomes. Introduced AI-powered content workflows that cut production time from days to hours. Led a full rebranding initiative that modernized the company's market presence.",
    result:
      "25% increase in marketing ROI. 30% increase in engagement across all channels. Eliminated manual campaign workflows entirely — what used to take days now runs autonomously. The infrastructure transformation turned marketing from a cost center into a measurable growth driver.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
