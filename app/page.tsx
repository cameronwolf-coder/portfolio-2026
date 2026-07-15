import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  documentationSteps,
  portfolioProjects,
  principles,
  proof,
  technicalProof,
} from "./home-content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cameronwolf.info"),
  title: "GTM Engineering Portfolio | Cameron Wolf",
  description:
    "A business-first GTM engineering portfolio covering CRM architecture, automation, lead routing, attribution, AI workflows, and revenue systems built by Cameron Wolf.",
  alternates: { canonical: "https://www.cameronwolf.info" },
  openGraph: {
    title: "GTM Engineering Portfolio | Cameron Wolf",
    description:
      "Revenue systems, real constraints, and end-to-end GTM engineering work by Cameron Wolf.",
    url: "https://www.cameronwolf.info",
    siteName: "Cameron Wolf",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Engineering Portfolio | Cameron Wolf",
    description:
      "Revenue systems, real constraints, and end-to-end GTM engineering work by Cameron Wolf.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.cameronwolf.info/#person",
  name: "Cameron Wolf",
  url: "https://www.cameronwolf.info",
  jobTitle: "GTM Engineer",
  email: "cameron@cameronwolf.info",
  sameAs: ["https://www.linkedin.com/in/camwolf/", "https://lupine.agency"],
  knowsAbout: [
    "GTM Engineering",
    "CRM Architecture",
    "Revenue Operations",
    "Marketing Automation",
    "AI Workflows",
    "Attribution",
    "Pipeline Analytics",
  ],
} as const;

const personJsonLdHtml = JSON.stringify(personJsonLd).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json">{personJsonLdHtml}</script>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <Link className={styles.wordmark} href="/" aria-label="Cameron Wolf, home">
          CW
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#systems">Systems</a>
          <a href="#proof">Proof</a>
          <a href="#method">Method</a>
        </nav>
        <a className={styles.headerContact} href="mailto:cameron@cameronwolf.info">
          Email Cameron
        </a>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title" className={styles.nameplate}>
            <span>CAMERON</span><span aria-hidden="true">.</span><span>WOLF</span>
          </h1>

          <div className={styles.heroMedia}>
            <Image
              className={styles.heroImage}
              src="/headshot.jpg"
              alt="Cameron Wolf, GTM engineer and systems builder"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 96vw"
            />
            <div className={styles.heroCaption}>
              <span>Cameron Wolf</span>
              <span>GTM engineer · systems builder</span>
            </div>
          </div>

          <div className={styles.heroStatement}>
            <p>I build the systems between a good idea and measurable revenue.</p>
            <div>
              <span>CRM architecture</span>
              <span>Automation</span>
              <span>Attribution</span>
              <span>Applied AI</span>
            </div>
          </div>
        </section>

        <section className={`${styles.manifesto} ${styles.reveal}`} aria-labelledby="principles-title">
          <div className={styles.manifestoIntro}>
            <p>What the work has to prove</p>
            <h2 id="principles-title">A portfolio should explain the business, not decorate the tools.</h2>
          </div>
          <div className={styles.principleCloud}>
            {principles.map((principle) => (
              <article key={principle.number} className={styles.principle}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="systems" className={styles.chapter} aria-labelledby="systems-title">
          <div className={styles.chapterHeading}>
            <h2 id="systems-title">SYSTEMS</h2>
          </div>
          <div className={`${styles.chapterIntro} ${styles.reveal}`}>
            <p>5 builds worth keeping</p>
            <h3>Revenue infrastructure that survives real inputs, real handoffs, and a bad Tuesday.</h3>
          </div>
          <div className={styles.projectRail} tabIndex={0} aria-label="Portfolio systems, scroll horizontally for more">
            {portfolioProjects.map((project) => (
              <article key={project.number} className={styles.projectCard}>
                <div className={styles.projectMeta}>
                  <span>{project.number}</span>
                  <span>GTM system</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.system}</p>
                <p className={styles.projectOutcome}>{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className={styles.chapter} aria-labelledby="proof-title">
          <div className={styles.chapterHeading}>
            <h2 id="proof-title">PROOF</h2>
          </div>
          <div className={`${styles.chapterIntro} ${styles.reveal}`}>
            <p>Selected work</p>
            <h3>Built under pressure. Measured in customers, pipeline, and an acquisition.</h3>
          </div>
          <div className={styles.proofGrid}>
            {proof.map((item) => (
              <Link key={item.href} href={item.href} className={`${styles.proofCard} ${styles.reveal}`}>
                <span className={styles.proofLogo}>
                  <Image src={item.logo} alt={`${item.company} logo`} width={160} height={64} />
                </span>
                <span className={styles.proofCompany}>{item.company}</span>
                <h3>{item.result}</h3>
                <p>{item.detail}</p>
                <span className={styles.readLink}>Read the case study <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </section>

        <section id="method" className={styles.chapter} aria-labelledby="method-title">
          <div className={styles.chapterHeading}>
            <h2 id="method-title">METHOD</h2>
          </div>
          <div className={`${styles.chapterIntro} ${styles.reveal}`}>
            <p>How I document a build</p>
            <h3>Start with the bottleneck. Show the decisions. End with what changed.</h3>
          </div>
          <div className={styles.methodGrid}>
            <ol className={styles.documentationList}>
              {documentationSteps.map(([title, detail], index) => (
                <li key={title} className={styles.reveal}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className={`${styles.technicalRoom} ${styles.reveal}`} aria-labelledby="technical-title">
              <p>Technical proof, kept in proportion</p>
              <h3 id="technical-title">Enough depth to ship. Enough judgment to keep it simple.</h3>
              <dl className={styles.technicalList}>
                {technicalProof.map(([title, tools]) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{tools}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.contactCopy}>
            <p>Available for the right build</p>
            <h2>Your next GTM hire should leave working systems behind.</h2>
          </div>
          <div className={styles.contactDetails}>
            <p>I architect the CRM, wire the APIs, build the automation, and connect the work to revenue.</p>
            <div className={styles.contactLinks}>
              <a href="mailto:cameron@cameronwolf.info">Email Cameron</a>
              <a href="https://www.linkedin.com/in/camwolf/" target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Cameron Wolf</span>
        <span>GTM engineering · systems · proof</span>
      </footer>
    </div>
  );
}
