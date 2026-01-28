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
      "ZappyRide was an early-stage EV marketplace with no brand awareness, entering a market dominated by legacy auto publishers like Edmunds, KBB, and Cars.com. The company had strong product (tools that helped consumers compare EVs and calculate total cost of ownership) but zero content presence, no editorial strategy, and no way to build trust with the buyers who needed it most.",
    insight:
      "Purchase anxiety, not price, was the real barrier to EV adoption. Consumers weren't comparison shopping; they were stuck at 'should I even consider an EV?' The incumbents were publishing specs and reviews, but nobody was creating the educational, trust-building content that moved buyers from curiosity to confidence. That gap was our opening: own the narrative, and you own the category.",
    action:
      "Built the brand from scratch: website, visual identity, and messaging architecture that positioned ZappyRide as the trusted EV authority, not just another listings site. Launched ZappyCast, an industry podcast that gave us a direct line to OEMs, dealers, and thought leaders. Created a content engine that published educational articles, buying guides, and cost-of-ownership tools at a pace the legacy publishers couldn't match. Drove 100% YoY revenue growth through organic and content-led channels while keeping acquisition costs near zero.",
    result:
      "ZappyRide was acquired by J.D. Power in May 2023. The brand positioning, content authority, and audience trust we built were direct contributors to acquisition value. J.D. Power wasn't just buying the product, they were buying the audience and the authority we'd created in the EV space.",
  },
  {
    slug: "sweet-express",
    company: "Sweet Express",
    role: "Marketing Manager",
    period: "February 2019 – April 2021",
    summary:
      "Built a regional trucking company's entire digital presence from scratch, driving 2,000% audience growth and 400K portal users in the first year.",
    icon: TrendingUp,
    accent: "teal",
    metrics: [
      { value: "2,000%", label: "Audience Growth" },
      { value: "400K", label: "First-Year Users" },
      { value: "15%+", label: "Engagement Rate" },
    ],
    situation:
      "Sweet Express was a regional trucking company in Michigan with no digital marketing presence. The brand had a strong local reputation but no social media footprint, no recruitment portal, and no scalable way to attract new drivers or build brand awareness beyond word-of-mouth.",
    insight:
      "Trucking companies in the region weren't investing in brand or digital presence. The competitive landscape was wide open online. A strong social and content strategy paired with a recruitment-focused portal could differentiate Sweet Express from every other carrier in Michigan and turn digital presence into a real driver of revenue and recruitment.",
    action:
      "Built the entire social media presence and brand from scratch. Launched an onboarding portal focused on driver recruitment that streamlined the hiring pipeline. Built an e-commerce store and managed social media to 15%+ engagement rates across 25K+ followers. Created a content system that positioned Sweet Express as a brand, not just a carrier.",
    result:
      "2,000% audience growth. 400,000 portal users in the first 12 months. Increased revenue year over year and established a brand presence that few competitors in Michigan could rival. Proved that even in a traditional industry, digital-first brand building drives real business outcomes.",
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
      "Truv is a Series B verification and compliance SaaS company that needs to accelerate enterprise pipeline. The product is technically complex (income and employment verification for financial services) and the buyer persona (risk, compliance, and operations leaders) requires high-trust, low-friction engagement before they'll take a meeting.",
    insight:
      "Enterprise buyers of compliance tools need trust signals and simplified messaging before outbound works. You can't cold-call a compliance officer with a feature list. The positioning needed to translate complex technical capabilities into clear business outcomes, and the demand gen system needed to build trust at scale before asking for the meeting.",
    action:
      "Built the messaging framework from scratch, translating technical verification capabilities into clear value propositions for risk, compliance, and ops buyers. Designed and launched ABM campaigns targeting named enterprise accounts. Introduced AI-powered automation to scale marketing workflows without adding headcount: from content personalization to lead scoring to campaign optimization.",
    result:
      "Currently building. The messaging framework, ABM infrastructure, and AI-powered workflows are in market and generating pipeline. The approach is designed to compound: every campaign improves targeting accuracy, every content piece builds domain authority, and every automation reduces the cost of the next conversion.",
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
      "The bottleneck wasn't strategy. It was infrastructure. The team had good ideas but no system to execute them at speed. Every campaign required manual assembly, every report required manual data pulls, and every optimization required starting from scratch. Fix the infrastructure, and strategy execution becomes instant instead of incremental.",
    action:
      "Led a complete Salesforce Marketing Cloud migration, consolidating fragmented tools into a single platform with unified data, automated workflows, and real-time analytics. Deployed advanced attribution modeling to finally connect marketing spend to revenue outcomes. Introduced AI-powered content workflows that cut production time from days to hours. Led a full rebranding initiative that modernized the company's market presence.",
    result:
      "25% increase in marketing ROI. 30% increase in engagement across all channels. Eliminated manual campaign workflows entirely. What used to take days now runs autonomously. The infrastructure transformation turned marketing from a cost center into a measurable growth driver.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
