import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pearlstone Marketing Automation | Cameron Wolf",
  description:
    "Capability overview for the Pearlstone team. How an AI agent stack brings all-in marketing cost per listing down materially.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

interface SavingsLever {
  title: string;
  body: string;
}

interface CostRow {
  horizon: string;
  cost: string;
  reduction: string;
  drivers: string;
}

interface AgentRow {
  agent: string;
  description: string;
  mode: "Automated" | "Human-approved";
}

interface PhaseItem {
  label: string;
  body: string;
}

const savingsLevers: SavingsLever[] = [
  {
    title: "Fixing measurement so you can see the waste",
    body: "Most luxury developer ad spend is allocated on incomplete data. Phone inquiries, offline events, and broker-driven closings rarely tie back to the campaign that produced them. Once attribution is rebuilt (clicks, calls, walk-ins, and broker introductions all unified to the same source-to-close picture), a meaningful share of current spend turns out to be misallocated. That share gets recovered without touching pipeline.",
  },
  {
    title: "Restructuring brand-level versus listing-level spend",
    body: "When several listings run at once, each one re-pays to reach the same Austin HNW buyer. Splitting budget into a single brand layer plus tactical listing-level bursts at launch and final-push removes the duplication. Campaign architecture change, no new tooling.",
  },
  {
    title: "Concentrating spend on channels that actually close",
    body: "Broad awareness inventory reaches millions of people who will never buy a $1.5M+ condo. Shifting weight toward high-intent search and first-party audiences (past closers, open-house attendees, qualified inquiries) produces equivalent or better pipeline at lower total spend.",
  },
  {
    title: "Removing layers between budget and inventory",
    body: "Agency-managed programmatic stacks fees at multiple levels: management, platform, data, undisclosed markups. Running the buy directly with proper transparency recovers a portion of every dollar that today never reaches a buyer's screen.",
  },
  {
    title: "Replacing retainer-funded work with system-funded work",
    body: "Media buying, performance reporting, lead triage, email nurture, content production, and competitive monitoring are work an agent stack handles at a fraction of the loaded cost. Strategic and relationship work stays with humans.",
  },
];

const costTable: CostRow[] = [
  {
    horizon: "Baseline (today)",
    cost: "~$25,000",
    reduction: "—",
    drivers: "Current agency and vendor stack",
  },
  {
    horizon: "Months 0–6",
    cost: "$14,000–$18,000",
    reduction: "30–45%",
    drivers:
      "Attribution clean-up, brand-vs-listing split, programmatic transparency",
  },
  {
    horizon: "Months 6–12",
    cost: "$10,000–$13,000",
    reduction: "50–60%",
    drivers:
      "Channel mix concentrated on closers, retainer work absorbed by the stack",
  },
  {
    horizon: "Months 12–24",
    cost: "$7,000–$9,000",
    reduction: "65–70%",
    drivers:
      "Owned channels (search, email, press) carrying meaningful share of demand",
  },
];

const agentRows: AgentRow[] = [
  {
    agent: "Attribution",
    description:
      "Unifies clicks, calls, walk-ins, broker intros, and CRM closes. Tells you which channel produced each contract.",
    mode: "Automated",
  },
  {
    agent: "Performance Reporting",
    description:
      "Weekly and monthly executive reports at listing and brand level. Replaces vendor decks.",
    mode: "Automated",
  },
  {
    agent: "Competitive Intel",
    description:
      "Monitors comparable Austin developers' channels, creative, pricing, and broker incentives.",
    mode: "Automated",
  },
  {
    agent: "Spend Architecture",
    description:
      "Enforces the brand-vs-listing budget split. Same buyer is not paid for multiple times across overlapping listings.",
    mode: "Automated",
  },
  {
    agent: "Media Buying",
    description:
      "Runs day-to-day Google, Meta, and programmatic. Pacing, audiences, creative rotation, bid adjustments.",
    mode: "Automated",
  },
  {
    agent: "Lead Qualification",
    description:
      "Site chatbot. Triages inbound by timeline, budget, financing, location. Books tours and writes a structured CRM note.",
    mode: "Automated",
  },
  {
    agent: "Email Nurture",
    description:
      "Segmented programs for HNW prospects, relocation buyers, wealth managers, brokers, past open-house attendees.",
    mode: "Automated",
  },
  {
    agent: "Content & SEO",
    description:
      "Market reports, neighborhood guides, project pages targeting searches HNW buyers actually run.",
    mode: "Automated",
  },
  {
    agent: "Creative Production",
    description:
      "Listing copy, ad variants, social captions, image and tour packaging.",
    mode: "Automated",
  },
  {
    agent: "Brand QA",
    description:
      "Every piece of agent-produced creative checked for accuracy, voice, and pricing consistency before publishing.",
    mode: "Human-approved",
  },
  {
    agent: "PR & Earned Media",
    description:
      "Drafts pitches and follow-ups to Mansion Global, Tribeza, Austin Business Journal, Texas Monthly, Architectural Digest, Robb Report.",
    mode: "Human-approved",
  },
  {
    agent: "Broker Outreach",
    description:
      "Live database of top Austin luxury agents. Drafts personalized outreach for bonus offers, exclusive previews, inventory updates.",
    mode: "Human-approved",
  },
];

const staysHuman: string[] = [
  "Strategy and brand direction. A marketing leader owns positioning, the launch calendar, and the high-stakes calls.",
  "Top-tier relationships. Celebrity-broker partnerships, charity events, HNW concierge moments.",
  "Final approval on press and broker outreach. Drafted by the system, sent by a human.",
];

const rollout: PhaseItem[] = [
  {
    label: "Phase 1 · Days 0–60 · Visibility",
    body: "Attribution and reporting come online. You see exactly where today's spend goes and which channels produce contracts.",
  },
  {
    label: "Phase 2 · Days 60–120 · Demand engine",
    body: "Media buying, spend architecture, lead qualification, and nurture run through the system.",
  },
  {
    label: "Phase 3 · Days 120–180 · Owned and earned",
    body: "Content, search, press, and broker outreach round out the stack.",
  },
];

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-mono text-teal-light tracking-widest">
          {index}
        </span>
        <div className="refraction-rule flex-1" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-dark-text mb-4"
          style={{ textWrap: "balance" }}>
        {title}
      </h2>
    </>
  );
}

export default function PearlstonePage() {
  return (
    <div className="liquid-bg min-h-screen">
      {/* Back nav */}
      <div className="px-6 md:px-[71px] pt-28 pb-0">
        <div className="max-w-[900px] mx-auto">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-dark-muted hover:text-dark-text transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-[71px] pt-10 pb-16">
        <div className="max-w-[900px] mx-auto">
          <span className="glass-pill inline-block px-4 py-2 rounded-full text-teal-light text-xs font-mono tracking-widest mb-6">
            CAPABILITY OVERVIEW
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-text mb-3"
              style={{ letterSpacing: "-0.03em", textWrap: "balance" }}>
            Pearlstone Marketing Automation
          </h1>
          <p className="text-dark-muted font-mono text-xs tracking-widest mb-2">
            PREPARED FOR THE PEARLSTONE TEAM · MAY 2026
          </p>
          <p className="text-lg text-dark-muted leading-relaxed max-w-2xl mt-4"
             style={{ textWrap: "pretty" }}>
            How an AI agent stack brings all-in marketing cost per listing down
            materially, while keeping sales velocity and brand quality intact.
          </p>
        </div>
      </section>

      {/* The Goal */}
      <section className="px-6 md:px-[71px] pb-16">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="01" title="The Goal" />
          <div className="liquid-glass p-6 sm:p-8">
            <p className="text-dark-muted leading-relaxed text-base sm:text-lg">
              Bring all-in marketing cost per listing down materially from where
              it sits today. Keep sales velocity and brand quality intact. The
              system finds waste, rebuilds measurement, and restructures how
              spend flows across listings and channels. It runs on top of your
              existing tools.
            </p>
          </div>
        </div>
      </section>

      {/* Savings levers */}
      <section className="px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="02" title="Where the Savings Come From" />
          <div className="space-y-6 mt-8">
            {savingsLevers.map((lever, i) => (
              <div
                key={lever.title}
                className="liquid-glass liquid-glass-hover p-6 sm:p-8"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-3xl font-black tabular-nums text-teal-light"
                        style={{ letterSpacing: "-0.04em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-dark-text"
                      style={{ textWrap: "balance" }}>
                    {lever.title}
                  </h3>
                </div>
                <p className="text-dark-muted leading-relaxed">{lever.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost reduction table */}
      <section className="px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="03" title="Estimated Cost Reduction" />
          <p className="text-dark-muted leading-relaxed mb-8">
            Baseline: ~$25,000 per active listing per month. The trajectory
            below is grounded in industry benchmarks for each lever.
            Pearlstone&apos;s actual numbers sharpen once Phase 1 visibility is
            live and current spend is mapped to outcomes.
          </p>
          <div className="liquid-glass overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 sm:px-6 py-4 text-[10px] font-mono text-dark-muted tracking-widest">
                    HORIZON
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-[10px] font-mono text-dark-muted tracking-widest">
                    PER-LISTING /MO
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-[10px] font-mono text-dark-muted tracking-widest">
                    VS. BASELINE
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-[10px] font-mono text-dark-muted tracking-widest">
                    PRIMARY DRIVERS
                  </th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row) => (
                  <tr
                    key={row.horizon}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-4 sm:px-6 py-4 text-dark-text font-semibold align-top">
                      {row.horizon}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-teal-light font-black tabular-nums align-top">
                      {row.cost}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-dark-text font-semibold tabular-nums align-top">
                      {row.reduction}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-dark-muted text-sm align-top">
                      {row.drivers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-dark-muted leading-relaxed mt-8">
            At five active listings, year-one run-rate moves from ~$1.5M to
            ~$700–800K. By month twenty-four, the same coverage approaches
            $450K. Roughly $1M per year saved at the same listing volume.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="04" title="The Agents" />
          <p className="text-dark-muted leading-relaxed mb-8">
            Twelve specialized agents, each scoped to one piece of the
            marketing function, coordinated by an orchestration layer above
            them.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {agentRows.map((row) => (
              <div
                key={row.agent}
                className="liquid-glass liquid-glass-hover p-5 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-black text-dark-text">
                    {row.agent}
                  </h3>
                  <span
                    className={`shrink-0 text-[10px] font-mono tracking-widest px-2 py-1 rounded-full border ${
                      row.mode === "Automated"
                        ? "bg-teal/10 text-teal-light border-teal/30"
                        : "bg-maroon/10 text-maroon-light border-maroon/30"
                    }`}
                  >
                    {row.mode === "Automated" ? "AUTO" : "HUMAN"}
                  </span>
                </div>
                <p className="text-sm text-dark-muted leading-relaxed">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-dark-muted leading-relaxed mt-8">
            The orchestration layer above the twelve routes work between them,
            enforces spend and content guardrails, watches operating cost in
            real time, and logs every decision for audit and CEO review.
          </p>
        </div>
      </section>

      {/* What stays human */}
      <section className="px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="05" title="What Stays Human" />
          <div className="liquid-glass p-6 sm:p-8 mt-2">
            <ol className="space-y-5">
              {staysHuman.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 text-2xl font-black tabular-nums text-teal-light"
                        style={{ letterSpacing: "-0.04em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-dark-muted leading-relaxed text-base sm:text-lg pt-1">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Rollout */}
      <section className="px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader index="06" title="Rollout" />
          <div className="space-y-5 mt-2">
            {rollout.map((phase) => (
              <div
                key={phase.label}
                className="liquid-glass liquid-glass-hover p-6 sm:p-8 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,163,163,0) 0%, rgba(0,163,163,0.9) 30%, rgba(0,163,163,0.5) 70%, rgba(0,163,163,0) 100%)",
                  }}
                />
                <p className="text-xs font-mono text-teal-light tracking-widest mb-3">
                  {phase.label}
                </p>
                <p className="text-dark-muted leading-relaxed text-base sm:text-lg">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-dark-muted leading-relaxed mt-8">
            By month six the full stack is operating and the cost trajectory
            per listing is established in the data.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-[71px] pb-24">
        <div className="max-w-[900px] mx-auto">
          <div className="liquid-glass p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-dark-muted font-mono">
              Questions or follow-up: contact Cameron directly.
            </p>
            <Link href="/#contact" className="pill-btn pill-btn-primary text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
