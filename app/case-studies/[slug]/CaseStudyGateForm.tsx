"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { grantCaseStudyAccess } from "../actions";

type CaseStudyGateFormProps = {
  readonly slug: string;
  readonly accent: "maroon" | "teal";
};

const initialGateState = {
  status: "idle" as const,
  message: "",
};

type GateState =
  | typeof initialGateState
  | { readonly status: "error"; readonly message: string };

export function CaseStudyGateForm({
  slug,
  accent,
}: CaseStudyGateFormProps): React.ReactNode {
  const [state, setState] = useState<GateState>(initialGateState);
  const [pending, setPending] = useState(false);
  const accentText =
    accent === "maroon" ? "text-maroon-light" : "text-teal-light";
  const accentFocus =
    accent === "maroon"
      ? "focus:border-maroon-light focus:ring-maroon-light/40"
      : "focus:border-teal-light focus:ring-teal-light/40";
  const inputState =
    state.status === "error"
      ? "border-maroon-light ring-1 ring-maroon-light/40"
      : "border-dark-border";

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email");
    if (!(emailInput instanceof HTMLInputElement) || !emailInput.validity.valid) {
      setState({ status: "error", message: "Enter a valid email address." });
      return;
    }

    setPending(true);
    setState(initialGateState);

    const email = emailInput.value.trim().toLowerCase();
    const formData = new FormData(form);
    formData.set("email", email);

    const result = await grantCaseStudyAccess(formData);
    setState(result);
    setPending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={pending}
      className="card-rounded card-dark p-6 sm:p-8"
    >
      <p className={`text-xs font-mono tracking-[0.2em] ${accentText}`}>
        FULL BREAKDOWN
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-dark-text sm:text-3xl">
        Read the Situation, Insight, Action, and Result.
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-dark-muted">
        Enter your email and I’ll notify Cameron that you requested access. The
        full case study opens immediately. No newsletter or automated follow-up.
      </p>

      <input type="hidden" name="slug" value={slug} />
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="grid gap-2" htmlFor="case-study-email">
          <span className="text-sm font-semibold text-dark-text">Email address</span>
          <input
            id="case-study-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            aria-describedby="case-study-gate-note case-study-gate-error"
            aria-invalid={state.status === "error"}
            className={`min-h-11 rounded-xl border bg-dark-bg px-4 text-base text-dark-text outline-none transition-colors placeholder:text-dark-muted/70 focus:ring-2 ${accentFocus} ${inputState}`}
            placeholder="you@company.com"
          />
        </label>
        <div className="self-end">
          <button
            type="submit"
            disabled={pending}
            className="pill-btn pill-btn-primary min-h-11 justify-center disabled:cursor-wait disabled:opacity-60"
          >
            {pending ? "Sending…" : "Show the full case study"}
          </button>
        </div>
      </div>

      {state.status === "error" ? (
        <p
          id="case-study-gate-error"
          role="alert"
          className="mt-3 rounded-lg border border-maroon-light/30 bg-maroon/10 px-3 py-2 text-sm font-semibold text-dark-text"
        >
          {state.message}
        </p>
      ) : null}
      <p id="case-study-gate-note" className="mt-3 text-sm leading-relaxed text-dark-muted">
        Your address is included in a one-time email notification to Cameron.
      </p>
    </form>
  );
}
