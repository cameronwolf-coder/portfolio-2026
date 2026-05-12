import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Portal from "../portal/Portal";

export const metadata: Metadata = {
  title: "Pearlstone Agent Selector | Cameron Wolf",
  description:
    "Interactive agent selector for the Pearlstone marketing automation stack. Discovery, recommendation, hours-to-build summary.",
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

const SECTION_PAD = "px-6 md:px-16 lg:px-20";
const CONTAINER_MAX = "max-w-[1080px]";

export default function PearlstoneAgentsPage() {
  return (
    <div className="liquid-bg min-h-screen">
      <main className="text-dark-text">
        <section className={`${SECTION_PAD} pt-20 pb-8`}>
          <div className={`${CONTAINER_MAX} mx-auto`}>
            <Link
              href="/work/pearlstone"
              className="inline-flex items-center gap-2 text-sm text-dark-muted hover:text-dark-text font-mono transition-colors"
            >
              <ArrowLeft size={14} />
              Back to overview
            </Link>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-dark-text mt-6 mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              Build your agent stack
            </h1>
            <p className="text-base sm:text-lg text-dark-muted max-w-[68ch] leading-relaxed">
              Three steps: answer a few discovery questions, review the recommended stack, then send the brief to Cameron.
            </p>
          </div>
        </section>

        <Portal />

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
                  Reach Cameron directly to get specifics on rollout, scope, or pricing.
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
