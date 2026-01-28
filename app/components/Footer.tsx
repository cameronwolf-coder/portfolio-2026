import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[71px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-black text-dark-text mb-3">
              CAMERON<span className="text-maroon-light">WOLF</span>
            </h3>
            <p className="text-dark-muted text-sm max-w-sm leading-relaxed">
              Technical Force Multiplier. Senior Growth Leader & Architect who
              facilitated the acquisition of ZappyRide by J.D. Power.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-dark-text tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/systems"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                Systems View
              </Link>
              <Link
                href="/blog"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/media"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                Media
              </Link>
              <Link
                href="/#contact"
                className="text-dark-muted hover:text-dark-text transition-colors text-sm"
              >
                Contact
              </Link>
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
            &copy; {new Date().getFullYear()} Cameron Wolf. All rights reserved.
          </p>
          <p className="text-dark-muted text-xs font-mono">
            Built with Next.js 15 &middot; Designed with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
