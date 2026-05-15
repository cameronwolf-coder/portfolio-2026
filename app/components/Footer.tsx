import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

type FooterVariant = "lupine" | "personal";

const footerConfig = {
  lupine: {
    brand: (
      <>
        LUPINE<span className="text-maroon-light">DIGITAL</span>
      </>
    ),
    description:
      "AI implementation and GTM engineering studio building agents, automation, CRM systems, and revenue infrastructure.",
    nav: [
      { href: "/", label: "Home" },
      { href: "/#services", label: "Services" },
      { href: "/systems", label: "Systems" },
      { href: "/about/cameron-wolf", label: "Founder" },
      { href: "/#contact", label: "Contact" },
    ],
    copyright: "Lupine Digital",
  },
  personal: {
    brand: (
      <>
        CAMERON<span className="text-maroon-light">WOLF</span>
      </>
    ),
    description:
      "GTM engineer and AI systems builder focused on RevOps, automation, attribution, and agentic growth infrastructure.",
    nav: [
      { href: "/", label: "Home" },
      { href: "/#work", label: "Work" },
      { href: "/#experience", label: "Experience" },
      { href: "https://lupine.agency", label: "Agency" },
      { href: "/#contact", label: "Contact" },
    ],
    copyright: "Cameron Wolf",
  },
};

export default function Footer({
  variant = "personal",
}: {
  variant?: FooterVariant;
}) {
  const config = footerConfig[variant];

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[71px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-black text-dark-text mb-3">
              {config.brand}
            </h3>
            <p className="text-dark-muted text-sm max-w-sm leading-relaxed">
              {config.description}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-dark-text tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {config.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-dark-muted hover:text-dark-text transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-sm font-bold text-dark-text tracking-wider uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:cameron@cameronwolf.info"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm flex items-center gap-2"
              >
                <Mail size={14} />
                cameron@cameronwolf.info
              </a>
              <a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm flex items-center gap-2"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-muted text-xs font-mono" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {config.copyright}. All rights reserved.
          </p>
          <p className="text-dark-muted text-xs font-mono">
            Built with Next.js 15 &middot; Designed with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
