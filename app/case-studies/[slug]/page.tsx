import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy, getAllSlugs } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: `${cs.company} — Cameron Wolf`,
    description: cs.summary,
    openGraph: {
      title: `${cs.company} Case Study — Cameron Wolf`,
      description: cs.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const accentText =
    cs.accent === "maroon" ? "text-maroon-light" : "text-teal-light";
  const accentBorder =
    cs.accent === "maroon" ? "border-maroon-light" : "border-teal-light";
  const accentBg =
    cs.accent === "maroon" ? "bg-maroon/10" : "bg-teal/10";

  const sections = [
    { label: "Situation", body: cs.situation },
    { label: "Insight", body: cs.insight },
    { label: "Action", body: cs.action },
    { label: "Result", body: cs.result },
  ];

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="section-dark px-6 md:px-[71px] pt-28 pb-0">
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
      <section className="section-dark px-6 md:px-[71px] pt-10 pb-16">
        <div className="max-w-[900px] mx-auto">
          <span
            className={`inline-block px-4 py-2 rounded-full ${accentBg} ${accentText} text-sm font-mono mb-6`}
          >
            CASE STUDY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-text mb-3">
            {cs.company}
          </h1>
          <p className="text-dark-muted font-mono text-sm mb-2">
            {cs.role} &middot; {cs.period}
          </p>
          <p className="text-lg text-dark-muted leading-relaxed max-w-2xl mt-4">
            {cs.summary}
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="section-dark px-6 md:px-[71px] pb-16">
        <div className="max-w-[900px] mx-auto">
          <div
            className={`card-rounded card-dark p-6 sm:p-8 grid grid-cols-${cs.metrics.length} gap-6 text-center`}
          >
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div
                  className={`text-3xl sm:text-4xl font-black tabular-nums ${accentText}`}
                >
                  {m.value}
                </div>
                <div className="text-sm text-dark-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIAR sections */}
      <section className="section-dark px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto space-y-16">
          {sections.map((s, i) => (
            <div key={s.label}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-xs font-mono ${accentText} tracking-widest`}
                >
                  0{i + 1}
                </span>
                <div className={`h-px flex-1 ${accentBorder} border-t`} />
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-black tracking-tight text-dark-text mb-4`}
              >
                {s.label}
              </h2>
              <p className="text-dark-muted leading-relaxed text-base sm:text-lg">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTAs */}
      <section className="section-dark px-6 md:px-[71px] pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="border-t border-dark-border pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group inline-flex items-center gap-3 text-dark-muted hover:text-dark-text transition-colors"
            >
              <span className="text-sm font-mono">Next Case Study</span>
              <span className={`font-bold ${accentText}`}>
                {nextStudy.company}
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#contact"
              className="pill-btn pill-btn-primary text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
