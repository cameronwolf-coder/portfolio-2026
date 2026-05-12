"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  ClipboardCopy,
  Download,
  Send,
  UserCheck,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "39f0cbc5-d930-406e-b056-8f127918c336";
import {
  AGENTS,
  BUNDLES,
  DISCOVERY,
  FULL_STACK_BUNDLE_PRICE,
  type Agent,
  type DiscoveryQuestion,
} from "./data";

type AnswerValue = string | string[];
type Answers = Record<string, AnswerValue>;

const SECTION_PAD = "px-6 md:px-16 lg:px-20";
const CONTAINER_MAX = "max-w-[1080px]";
const PROSE_MAX = "max-w-[68ch]";

function PortalSectionHeader({ index, title }: { index: string; title: string }) {
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

function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

function DiscoveryWizard({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: (next: Answers) => void;
}) {
  const [step, setStep] = useState(0);
  const section = DISCOVERY[step];
  const totalSteps = DISCOVERY.length;

  const setAnswer = (questionId: string, value: AnswerValue) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const toggleMulti = (questionId: string, option: string) => {
    const current = (answers[questionId] as string[] | undefined) ?? [];
    const next = current.includes(option)
      ? current.filter((v) => v !== option)
      : [...current, option];
    setAnswer(questionId, next);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 text-xs font-mono text-dark-muted tracking-wide">
        <span className="tabular-nums text-teal-light">
          {String(step + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
        </span>
        <div className="meter-track flex-1">
          <div
            className="meter-fill"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
          className="liquid-glass p-6 sm:p-8"
        >
          <p className="text-[10px] font-mono text-teal-light tracking-[0.25em] mb-2">
            SECTION {section.index}
          </p>
          <h3
            className="text-2xl sm:text-3xl font-black text-dark-text mb-2"
            style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            {section.title}
          </h3>
          <p className={`${PROSE_MAX} text-dark-muted leading-relaxed mb-8`}>
            {section.summary}
          </p>

          <div className="space-y-7">
            {section.questions.map((q) => (
              <QuestionField
                key={q.id}
                question={q}
                value={answers[q.id]}
                onSingle={(v) => setAnswer(q.id, v)}
                onToggle={(v) => toggleMulti(q.id, v)}
                onText={(v) => setAnswer(q.id, v)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-6 gap-3">
        <button
          type="button"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="focus-glow pill-btn pill-btn-outline-light text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} aria-hidden /> Back
        </button>
        <p className="text-xs font-mono text-dark-muted tracking-wide hidden sm:block">
          {section.id === DISCOVERY[totalSteps - 1].id
            ? "Last section — answers feed into the agent picker below."
            : "Answers save automatically."}
        </p>
        <button
          type="button"
          onClick={() => setStep(Math.min(totalSteps - 1, step + 1))}
          disabled={step === totalSteps - 1}
          className="focus-glow pill-btn pill-btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next <ArrowRight size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}

function QuestionField({
  question,
  value,
  onSingle,
  onToggle,
  onText,
}: {
  question: DiscoveryQuestion;
  value: AnswerValue | undefined;
  onSingle: (v: string) => void;
  onToggle: (v: string) => void;
  onText: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-base sm:text-lg font-bold text-dark-text mb-1">
        {question.prompt}
      </legend>
      {question.helper && (
        <p className="text-xs text-dark-muted mb-3">{question.helper}</p>
      )}

      {question.type === "text" ? (
        <textarea
          className="w-full liquid-glass p-4 text-sm text-dark-text bg-transparent border-none focus:outline-none focus-glow leading-relaxed"
          rows={3}
          value={(value as string) ?? ""}
          onChange={(e) => onText(e.target.value)}
          placeholder="Type here…"
        />
      ) : (
        <div className="flex flex-wrap gap-2 mt-3">
          {question.options?.map((opt) => {
            const selected =
              question.type === "multi"
                ? ((value as string[] | undefined) ?? []).includes(opt.value)
                : value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() =>
                  question.type === "multi"
                    ? onToggle(opt.value)
                    : onSingle(opt.value)
                }
                aria-pressed={selected}
                className={`focus-glow inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono border transition-colors ${
                  selected
                    ? "bg-teal/20 border-teal-light/50 text-teal-light"
                    : "bg-transparent border-dark-border text-dark-muted hover:border-teal-light/30 hover:text-dark-text"
                }`}
              >
                {selected && <Check size={14} aria-hidden />}
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}

function AgentSelector({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: Set<string>;
  setSelectedIds: (next: Set<string>) => void;
}) {
  const toggleAgent = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const applyBundle = (agentIds: string[]) => {
    setSelectedIds(new Set(agentIds));
  };

  const clearAll = () => setSelectedIds(new Set());

  const isFullStack = selectedIds.size === AGENTS.length;
  const rawTotal = AGENTS
    .filter((a) => selectedIds.has(a.id))
    .reduce((sum, a) => sum + a.monthlyPrice, 0);
  const total = isFullStack ? FULL_STACK_BUNDLE_PRICE : rawTotal;

  return (
    <div>
      <div className="liquid-glass p-5 sm:p-6 mb-6 flex flex-wrap items-center gap-3">
        <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mr-auto">
          STARTING POINTS
        </p>
        {BUNDLES.map((bundle) => (
          <button
            key={bundle.id}
            type="button"
            onClick={() => applyBundle(bundle.agentIds)}
            className="focus-glow inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border border-teal-light/30 text-teal-light hover:bg-teal/15 transition-colors"
          >
            {bundle.name}
            <span className="text-dark-muted">{formatPrice(bundle.price)}/mo</span>
          </button>
        ))}
        <button
          type="button"
          onClick={clearAll}
          className="focus-glow inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border border-dark-border text-dark-muted hover:text-dark-text transition-colors"
        >
          Clear
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AGENTS.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            selected={selectedIds.has(agent.id)}
            onToggle={() => toggleAgent(agent.id)}
          />
        ))}
      </div>

      <div className="liquid-glass p-6 sm:p-8 mt-6 grid sm:grid-cols-[1fr_auto] gap-4 items-center">
        <div>
          <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-2">
            CURRENT SELECTION
          </p>
          <p className="text-dark-text">
            <span className="font-black text-2xl tabular-nums text-teal-light mr-2">
              {selectedIds.size}
            </span>
            agent{selectedIds.size === 1 ? "" : "s"} selected
            {isFullStack && (
              <span className="ml-3 text-xs font-mono text-teal-light">
                FULL-STACK BUNDLE PRICING
              </span>
            )}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-1">
            EST. MONTHLY
          </p>
          <p
            className="text-4xl font-black text-teal-light tabular-nums"
            style={{ letterSpacing: "-0.04em" }}
          >
            {formatPrice(total)}
          </p>
          {isFullStack && rawTotal !== total && (
            <p className="text-xs text-dark-muted line-through tabular-nums">
              {formatPrice(rawTotal)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function AgentCard({
  agent,
  selected,
  onToggle,
}: {
  agent: Agent;
  selected: boolean;
  onToggle: () => void;
}) {
  const isAuto = agent.mode === "Automated";
  const Icon = isAuto ? Bot : UserCheck;

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`liquid-glass liquid-glass-hover p-5 flex flex-col text-left focus-glow transition-colors ${
        selected ? "ring-2 ring-teal-light/60" : ""
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`mode-dot ${isAuto ? "mode-dot-auto" : "mode-dot-human"}`}
          aria-hidden
        >
          <Icon size={16} />
        </span>
        <div className="flex-1">
          <p className="text-[10px] font-mono text-dark-muted tracking-[0.2em] mb-0.5">
            {agent.tier.toUpperCase()}
          </p>
          <h3 className="text-base font-black text-dark-text leading-snug">
            {agent.name}
          </h3>
        </div>
        <span
          className={`w-6 h-6 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
            selected
              ? "bg-teal-light/30 border-teal-light"
              : "border-dark-border"
          }`}
          aria-hidden
        >
          {selected && <Check size={14} className="text-teal-light" />}
        </span>
      </div>
      <p className="text-sm text-dark-muted leading-relaxed mb-4">
        {agent.description}
      </p>
      <div className="mt-auto pt-3 border-t border-dark-border flex items-baseline justify-between">
        <span className="text-[10px] font-mono text-dark-muted tracking-[0.2em]">
          MONTHLY
        </span>
        <span className="text-lg font-black text-teal-light tabular-nums">
          {formatPrice(agent.monthlyPrice)}
        </span>
      </div>
    </motion.button>
  );
}

function SummaryCard({
  answers,
  selectedIds,
}: {
  answers: Answers;
  selectedIds: Set<string>;
}) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendError, setSendError] = useState<string | null>(null);

  const selectedAgents = useMemo(
    () => AGENTS.filter((a) => selectedIds.has(a.id)),
    [selectedIds],
  );

  const isFullStack = selectedIds.size === AGENTS.length;
  const rawTotal = selectedAgents.reduce((sum, a) => sum + a.monthlyPrice, 0);
  const total = isFullStack ? FULL_STACK_BUNDLE_PRICE : rawTotal;

  const answeredCount = Object.values(answers).filter((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v),
  ).length;
  const totalQuestions = DISCOVERY.reduce(
    (sum, s) => sum + s.questions.length,
    0,
  );

  const summaryText = useMemo(() => {
    const lines: string[] = [];
    lines.push("# Pearlstone — Marketing Automation Selection");
    lines.push("");
    lines.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
    lines.push("");
    lines.push("## Selected agents");
    if (selectedAgents.length === 0) {
      lines.push("_No agents selected yet._");
    } else {
      selectedAgents.forEach((a) => {
        lines.push(`- **${a.name}** (${a.tier}) — ${formatPrice(a.monthlyPrice)}/mo`);
      });
    }
    lines.push("");
    lines.push(`**Estimated monthly:** ${formatPrice(total)}`);
    if (isFullStack && rawTotal !== total) {
      lines.push(`_(Full-stack bundle pricing — saves ${formatPrice(rawTotal - total)}/mo vs à la carte)_`);
    }
    lines.push("");
    lines.push("## Discovery answers");
    DISCOVERY.forEach((section) => {
      const filled = section.questions.filter((q) => {
        const v = answers[q.id];
        return Array.isArray(v) ? v.length > 0 : Boolean(v);
      });
      if (filled.length === 0) return;
      lines.push("");
      lines.push(`### ${section.index} ${section.title}`);
      filled.forEach((q) => {
        const v = answers[q.id];
        const display = Array.isArray(v)
          ? v
              .map((val) => q.options?.find((o) => o.value === val)?.label ?? val)
              .join(", ")
          : q.options?.find((o) => o.value === v)?.label ?? v;
        lines.push(`- _${q.prompt}_ — ${display}`);
      });
    });
    return lines.join("\n");
  }, [answers, selectedAgents, total, rawTotal, isFullStack]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  const onSend = async () => {
    if (sendState === "sending") return;
    setSendState("sending");
    setSendError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Pearlstone portal — ${senderName.trim() || "anonymous submission"}`,
          from_name: senderName.trim() || "Pearlstone Portal",
          email: senderEmail.trim() || "noreply@cameronwolf.info",
          name: senderName.trim() || "Pearlstone Portal",
          message: summaryText,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSendState("sent");
        setTimeout(() => setSendState("idle"), 4000);
      } else {
        setSendState("error");
        setSendError(data.message || "Send failed");
      }
    } catch (err) {
      setSendState("error");
      setSendError(err instanceof Error ? err.message : "Network error");
    }
  };

  const onDownload = () => {
    const blob = new Blob([summaryText], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pearlstone-selection-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="liquid-glass p-6 sm:p-8">
        <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-start">
          <div>
            <p className="text-[10px] font-mono text-teal-light tracking-[0.25em] mb-2">
              SHARED SUMMARY
            </p>
            <h3
              className="text-2xl sm:text-3xl font-black text-dark-text mb-2"
              style={{ letterSpacing: "-0.025em" }}
            >
              {selectedAgents.length === 0
                ? "Nothing selected yet"
                : `${selectedAgents.length} agent${selectedAgents.length === 1 ? "" : "s"} · ${formatPrice(total)}/mo`}
            </h3>
            <p className={`${PROSE_MAX} text-dark-muted leading-relaxed`}>
              {answeredCount}/{totalQuestions} discovery questions captured. Copy or download the summary
              and send it to Cameron — it includes everything below.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={onCopy}
              className="focus-glow pill-btn pill-btn-outline-light text-sm"
            >
              {copied ? <Check size={16} aria-hidden /> : <ClipboardCopy size={16} aria-hidden />}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="focus-glow pill-btn pill-btn-primary text-sm"
            >
              <Download size={16} aria-hidden /> Download
            </button>
          </div>
        </div>

        {/* Send to Cameron — Web3Forms */}
        <div className="liquid-glass p-5 mt-6">
          <p className="text-[10px] font-mono text-teal-light tracking-[0.25em] mb-3">
            SEND TO CAMERON
          </p>
          <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-stretch">
            <label className="flex flex-col">
              <span className="text-[10px] font-mono text-dark-muted tracking-[0.2em] mb-1">
                YOUR NAME
              </span>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Bill Pearlstone"
                disabled={sendState === "sending" || sendState === "sent"}
                className="focus-glow bg-transparent border border-dark-border rounded-xl px-4 py-2.5 text-sm text-dark-text placeholder:text-dark-muted/60 focus:border-teal-light/50 focus:outline-none transition-colors"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[10px] font-mono text-dark-muted tracking-[0.2em] mb-1">
                YOUR EMAIL
              </span>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="bill@pearlstonepartners.com"
                disabled={sendState === "sending" || sendState === "sent"}
                className="focus-glow bg-transparent border border-dark-border rounded-xl px-4 py-2.5 text-sm text-dark-text placeholder:text-dark-muted/60 focus:border-teal-light/50 focus:outline-none transition-colors"
              />
            </label>
            <button
              type="button"
              onClick={onSend}
              disabled={sendState === "sending" || sendState === "sent"}
              className="focus-glow pill-btn pill-btn-primary text-sm self-end disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sendState === "sending" ? (
                <>Sending…</>
              ) : sendState === "sent" ? (
                <>
                  <Check size={16} aria-hidden /> Sent
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden /> Send
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-dark-muted mt-3 leading-relaxed">
            Sends the full summary above (picks + discovery answers) straight to Cameron&apos;s inbox.
            Name and email are optional but make replies easier.
          </p>
          {sendState === "error" && sendError && (
            <p className="text-xs text-maroon-light font-mono mt-2">
              Send failed: {sendError}
            </p>
          )}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="liquid-glass p-5">
            <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-3">
              AGENTS
            </p>
            {selectedAgents.length === 0 ? (
              <p className="text-sm text-dark-muted">
                Pick agents above to populate this list.
              </p>
            ) : (
              <ul className="space-y-2">
                {selectedAgents.map((a) => (
                  <li key={a.id} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-dark-text">{a.name}</span>
                    <span className="font-mono text-teal-light tabular-nums">
                      {formatPrice(a.monthlyPrice)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="liquid-glass p-5">
            <p className="text-[10px] font-mono text-dark-muted tracking-[0.25em] mb-3">
              DISCOVERY COVERAGE
            </p>
            <ul className="space-y-2 text-sm">
              {DISCOVERY.map((section) => {
                const filled = section.questions.filter((q) => {
                  const v = answers[q.id];
                  return Array.isArray(v) ? v.length > 0 : Boolean(v);
                }).length;
                const complete = filled === section.questions.length;
                return (
                  <li key={section.id} className="flex items-baseline justify-between gap-3">
                    <span className="text-dark-muted">
                      {section.index} · {section.title}
                    </span>
                    <span
                      className={`font-mono tabular-nums ${complete ? "text-teal-light" : "text-dark-muted"}`}
                    >
                      {filled}/{section.questions.length}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portal() {
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  return (
    <>
      <section className={`${SECTION_PAD} pb-24`}>
        <div className={`${CONTAINER_MAX} mx-auto`}>
          <PortalSectionHeader index="07" title="Discovery" />
          <p
            className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-2 mb-8`}
          >
            Ten short sections that map your current marketing stack. Answers stay
            in this browser tab — nothing is sent anywhere. Use the Copy or Download
            button at the end to share the result with Cameron.
          </p>
          <DiscoveryWizard answers={answers} setAnswers={setAnswers} />
        </div>
      </section>

      <section className={`${SECTION_PAD} pb-24`}>
        <div className={`${CONTAINER_MAX} mx-auto`}>
          <PortalSectionHeader index="08" title="Pick the agents you want" />
          <p
            className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-2 mb-8`}
          >
            À la carte pricing. The Full Stack starting point applies the
            twelve-agent bundle discount automatically.
          </p>
          <AgentSelector
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </div>
      </section>

      <section className={`${SECTION_PAD} pb-28`}>
        <div className={`${CONTAINER_MAX} mx-auto`}>
          <PortalSectionHeader index="09" title="Your summary" />
          <p
            className={`${PROSE_MAX} text-dark-muted leading-relaxed mt-2 mb-8`}
          >
            One file with both halves: what you picked and what you told us about
            your current stack.
          </p>
          <SummaryCard answers={answers} selectedIds={selectedIds} />
        </div>
      </section>
    </>
  );
}
