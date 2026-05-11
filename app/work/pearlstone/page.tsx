import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bot, UserCheck } from "lucide-react";

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
  reductionPct: number;
  drivers: string;
}

interface AgentRow {
  agent: string;
  description: string;
  mode: "Automated" | "Human-approved";
}

interface StaysHuman {
  title: string;
  body: string;
}

interface PhaseItem {
  num: string;
  range: string;
  label: string;
  body: string;
}

const savingsLevers: SavingsLever[] = [
  {
    title: "Fixing measurement so you can see the waste",
    body: "Most luxury developer ad spend is allocated on incomplete data. Phone inquiries, offline events, and broker-driven closings rarely tie back to the campaign that produced them. Once attribution is rebuilt — clicks, calls, walk-ins, and broker introductions unified to the same source-to-close picture — a meaningful share of current spend turns out to be misallocated. That share gets recovered without touching pipeline.",
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
    reductionPct: 0,
    drivers: "Current agency and vendor stack",
  },
  {
    horizon: "Months 0–6",
    cost: "$14,000–$18,000",
    reduction: "30–45%",
    reductionPct: 38,
    drivers: "Attribution clean-up, brand-vs-listing split, programmatic transparency",
  },
  {
    horizon: "Months 6–12",
    cost: "$10,000–$13,000",
    reduction: "50–60%",
    reductionPct: 55,
    drivers: "Channel mix concentrated on closers, retainer work absorbed by the stack",
  },
  {
    horizon: "Months 12–24",
    cost: "$7,000–$9,000",
    reduction: "65–70%",
    reductionPct: 68,
    drivers: "Owned channels (search, email, press) carrying meaningful share of demand",
  },
];

const agentRows: AgentRow[] = [
  { agent: "Attribution", description: "Unifies clicks, calls, walk-ins, broker intros, and CRM closes. Tells you which channel produced each contract.", mode: "Automated" },
  { agent: "Performance Reporting", description: "Weekly and monthly executive reports at listing and brand level. Replaces vendor decks.", mode: "Automated" },
  { agent: "Competitive Intel", description: "Monitors comparable Austin developers' channels, creative, pricing, and broker incentives.", mode: "Automated" },
  { agent: "Spend Architecture", description: "Enforces the brand-vs-listing budget split. Same buyer is not paid for multiple times across overlapping listings.", mode: "Automated" },
  { agent: "Media Buying", description: "Runs day-to-day Google, Meta, and programmatic. Pacing, audiences, creative rotation, bid adjustments.", mode: "Automated" },
  { agent: "Lead Qualification", description: "Site chatbot. Triages inbound by timeline, budget, financing, location. Books tours and writes a structured CRM note.", mode: "Automated" },
  { agent: "Email Nurture", description: "Segmented programs for HNW prospects, relocation buyers, wealth managers, brokers, past open-house attendees.", mode: "Automated" },
  { agent: "Content & SEO", description: "Market reports, neighborhood guides, project pages targeting searches HNW buyers actually run.", mode: "Automated" },
  { agent: "Creative Production", description: "Listing copy, ad variants, social captions, image and tour packaging.", mode: "Automated" },
  { agent: "Brand QA", description: "Every piece of agent-produced creative checked for accuracy, voice, and pricing consistency before publishing.", mode: "Human-approved" },
  { agent: "PR & Earned Media", description: "Drafts pitches and follow-ups to Mansion Global, Tribeza, Austin Business Journal, Texas Monthly, Architectural Digest, Robb Report.", mode: "Human-approved" },
  { agent: "Broker Outreach", description: "Live database of top Austin luxury agents. Drafts personalized outreach for bonus offers, exclusive previews, inventory updates.", mode: "Human-approved" },
];

const staysHuman: StaysHuman[] = [
  {
    title: "Strategy and brand direction",
    body: "A marketing leader owns positioning, the launch calendar, and the high-stakes calls.",
  },
  {
    title: "Top-tier relationships",
    body: "Celebrity-broker partnerships, charity events, HNW concierge moments.",
  },
  {
    title: "Final approval on outreach",
    body: "Press and broker drafts written by the system, sent by a human.",
  },
];

const rollout: PhaseItem[] = [
  {
    num: "01",
    range: "Days 0–60",
    label: "Visibility",
    body: "Attribution and reporting come online. You see exactly where today's spend goes and which channels produce contracts.",
  },
  {
    num: "02",
    range: "Days 60–120",
    label: "Demand engine",
    body: "Media buying, spend architecture, lead qualification, and nurture run through the system.",
  },
  {
    num: "03",
    range: "Days 120–180",
    label: "Owned and earned",
    body: "Content, search, press, and broker outreach round out the stack.",
  },
];

const SECTION_PAD = "px-6 md:px-16 lg:px-20";
const PROSE_MAX = "max-w-[68ch]";
const CONTAINER_MAX = "max-w-[1080px]";

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] font-mono text-teal-light tracking-[0.25em]">
          {index}
        </span>
        <div className="refraction-rule flex-1" />
      </div>
      <h2
        className="text-3xl sm:text-4xl font-black text-dark-text mb-2"
        style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
      >
        {title}
      </h2>
    </>
  );
}

export default function PearlstonePage() {
  return (
    <div className="liquid-bg min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal focus:text-white focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>

      <nav className={`${SECTION_PAD} pt-24 pb-0`} aria-label="Back navigation">
        <div className={`${CONTAINER_MAX} mx-auto`}>
          <Link
            href="/#portfolio"
            className="focus-glow inline-flex items-center gap-2 text-sm text-dark-muted hover:text-dark-text transition-colors"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to portfolio
          </Link>
        </div>
      </nav>

      <main id="main">
        {/* Hero — asymmetric: left wordmark + intent, right headline figure */}
        <section className={`${SECTION_PAD} pt-10 pb-20`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
              <div>
                <span className="glass-pill inline-block px-4 py-2 rounded-full text-teal-light text-[11px] font-mono tracking-[0.25em] mb-6">
                  CAPABILITY OVERVIEW
                </span>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-dark-text mb-4"
                  style={{ letterSpacing: "-0.035em", lineHeight: 0.95, textWrap: "balance" }}
                >
                  Pearlstone marketing automation
                </h1>
                <p className="text-dark-muted font-mono text-[11px] tracking-[0.25em] mb-6">
                  PREPARED FOR THE PEARLSTONE TEAM · MAY 2026
                </p>
                <p
                  className={`${PROSE_MAX} text-lg text-dark-muted leading-relaxed`}
                  style={{ textWrap: "pretty" }}
                >
                  An AI agent stack brings all-in marketing cost per listing
                  down materially, while keeping sales velocity and brand
                  quality intact.
                </p>
              </div>

              {/* Headline figure */}
              <aside
                className="liquid-glass p-6 sm:p-8 lg:min-w-[280px]"
                aria-label="Headline figure"
              >
                <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-4">
                  PER-LISTING /MO
                </p>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-2xl font-black text-dark-muted line-through tabular-nums"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    $25K
                  </span>
                  <span className="text-dark-muted">→</span>
                  <span
                    className="text-5xl font-black text-teal-light tabular-nums"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    $7K
                  </span>
                </div>
                <p className="text-sm text-dark-muted mt-3 leading-snug">
                  By month 24. Roughly{" "}
                  <span className="text-dark-text font-semibold">
                    $1M/yr saved
                  </span>{" "}
                  at five active listings.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* The goal */}
        <section className={`${SECTION_PAD} pb-20`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="01" title="The goal" />
            <div className="liquid-glass p-6 sm:p-8 mt-6">
              <p
                className={`${PROSE_MAX} text-dark-muted leading-relaxed text-base sm:text-lg`}
              >
                Bring all-in marketing cost per listing down materially from
                where it sits today. Keep sales velocity and brand quality
                intact. The system finds waste, rebuilds measurement, and
                restructures how spend flows across listings and channels. It
                runs on top of your existing tools.
              </p>
            </div>
          </div>
        </section>

        {/* Savings levers — asymmetric stacked cards w/ number drop */}
        <section className={`${SECTION_PAD} pb-24`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="02" title="Where the savings come from" />
            <div className="space-y-5 mt-8">
              {savingsLevers.map((lever, i) => (
                <article
                  key={lever.title}
                  className="liquid-glass liquid-glass-hover p-6 sm:p-8 grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7"
                >
                  <span
                    className="text-4xl sm:text-5xl font-black tabular-nums text-teal-light"
                    style={{ letterSpacing: "-0.05em" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-black text-dark-text mb-2 mt-1"
                      style={{ letterSpacing: "-0.02em", textWrap: "balance" }}
                    >
                      {lever.title}
                    </h3>
                    <p
                      className={`${PROSE_MAX} text-dark-muted leading-relaxed`}
                    >
                      {lever.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cost reduction — visual ladder (no boring table) */}
        <section className={`${SECTION_PAD} pb-24`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="03" title="Estimated cost reduction" />
            <p
              className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-2 mb-10`}
            >
              Baseline: ~$25,000 per active listing per month. The trajectory
              below is grounded in industry benchmarks for each lever.
              Pearlstone&apos;s actual numbers sharpen once Phase 1 visibility
              is live and current spend is mapped to outcomes.
            </p>
            <div className="space-y-4">
              {costTable.map((row) => (
                <div
                  key={row.horizon}
                  className="liquid-glass p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[200px_140px_1fr] gap-4 md:gap-6 items-center"
                >
                  <div>
                    <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-1">
                      HORIZON
                    </p>
                    <p className="text-dark-text font-semibold">
                      {row.horizon}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-1">
                      PER-LISTING /MO
                    </p>
                    <p
                      className="text-xl font-black text-teal-light tabular-nums"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {row.cost}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em]">
                        VS. BASELINE
                      </p>
                      <p className="text-sm font-mono font-semibold text-dark-text tabular-nums">
                        {row.reduction}
                      </p>
                    </div>
                    <div
                      className="meter-track"
                      role="progressbar"
                      aria-label={`Cost reduction at ${row.horizon}`}
                      aria-valuenow={row.reductionPct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="meter-fill"
                        style={{ width: `${row.reductionPct}%` }}
                      />
                    </div>
                    <p className="text-xs text-dark-muted mt-2 leading-snug">
                      {row.drivers}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-10`}
            >
              At five active listings, year-one run-rate moves from ~$1.5M to
              ~$700–800K. By month twenty-four, the same coverage approaches
              $450K. Roughly $1M per year saved at the same listing volume.
            </p>
          </div>
        </section>

        {/* Agents — 3-col grid w/ category icons (no AUTO/HUMAN pill badges) */}
        <section className={`${SECTION_PAD} pb-24`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="04" title="The agents" />
            <p
              className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-2 mb-8`}
            >
              Twelve specialized agents, each scoped to one piece of the
              marketing function, coordinated by an orchestration layer above
              them.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-xs font-mono text-dark-muted tracking-wide">
              <span className="inline-flex items-center gap-2">
                <span className="mode-dot mode-dot-auto" style={{ width: 20, height: 20, borderRadius: 7 }}>
                  <Bot size={11} aria-hidden />
                </span>
                Automated
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="mode-dot mode-dot-human" style={{ width: 20, height: 20, borderRadius: 7 }}>
                  <UserCheck size={11} aria-hidden />
                </span>
                Human-approved
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentRows.map((row) => {
                const isAuto = row.mode === "Automated";
                const Icon = isAuto ? Bot : UserCheck;
                return (
                  <article
                    key={row.agent}
                    className="liquid-glass liquid-glass-hover p-5 flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span
                        className={`mode-dot ${isAuto ? "mode-dot-auto" : "mode-dot-human"}`}
                        aria-label={row.mode}
                      >
                        <Icon size={16} aria-hidden />
                      </span>
                      <h3 className="text-base font-black text-dark-text leading-snug pt-1">
                        {row.agent}
                      </h3>
                    </div>
                    <p className="text-sm text-dark-muted leading-relaxed">
                      {row.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <p
              className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-10`}
            >
              The orchestration layer above the twelve routes work between
              them, enforces spend and content guardrails, watches operating
              cost in real time, and logs every decision for audit and CEO
              review.
            </p>
          </div>
        </section>

        {/* What stays human — 3-col mini cards */}
        <section className={`${SECTION_PAD} pb-24`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="05" title="What stays human" />
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {staysHuman.map((item, i) => (
                <article
                  key={item.title}
                  className="liquid-glass liquid-glass-hover p-6 flex flex-col"
                >
                  <span
                    className="text-3xl font-black tabular-nums text-maroon-light mb-3"
                    style={{ letterSpacing: "-0.05em" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-lg font-black text-dark-text mb-2"
                    style={{ letterSpacing: "-0.02em", textWrap: "balance" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rollout — horizontal stepper desktop, stacked mobile */}
        <section className={`${SECTION_PAD} pb-24`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <SectionHeader index="06" title="Rollout" />

            {/* Desktop stepper nodes */}
            <div
              className="hidden md:flex items-center gap-3 mt-10 mb-8"
              aria-hidden
            >
              {rollout.map((phase, i) => (
                <div key={phase.num} className="flex items-center gap-3 flex-1 last:flex-none">
                  <span className="stepper-node">{phase.num}</span>
                  {i < rollout.length - 1 && (
                    <span className="stepper-connector" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {rollout.map((phase) => (
                <article
                  key={phase.num}
                  className="liquid-glass liquid-glass-hover p-6 flex flex-col"
                >
                  <p className="text-[10px] font-mono text-teal-light tracking-[0.25em] mb-2">
                    {phase.range}
                  </p>
                  <h3
                    className="text-xl font-black text-dark-text mb-3"
                    style={{ letterSpacing: "-0.02em", textWrap: "balance" }}
                  >
                    {phase.label}
                  </h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {phase.body}
                  </p>
                </article>
              ))}
            </div>

            <p
              className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-10`}
            >
              By month six the full stack is operating and the cost trajectory
              per listing is established in the data.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className={`${SECTION_PAD} pb-28`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <div className="liquid-glass p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="text-xl sm:text-2xl font-black text-dark-text mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Questions or follow-up
                </p>
                <p className="text-sm text-dark-muted font-mono">
                  Reach Cameron directly to get specifics on rollout, scope, or
                  pricing.
                </p>
              </div>
              <Link
                href="/#contact"
                className="focus-glow pill-btn pill-btn-primary text-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
