import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "Collections", href: "/collection" },
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramGlyph },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookGlyph },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/70">
      <div className="relative mx-auto max-w-[1600px] px-6 pt-14 pb-10 sm:px-10 lg:px-[5.8vw] lg:pt-16">
        <div className="grid gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:divide-x lg:divide-white/10">
          <div className="lg:pr-10">
            <Link href="/" className="inline-flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-wide text-white">
                J&amp;M <span className="text-gold italic">Housing</span>
              </span>
              <span className="mt-2 text-[10px] font-bold tracking-[0.4em] text-gold/70 uppercase">
                Hospitality
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              More than a place to stay. Your Moroccan experience starts here.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:px-10">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:px-10">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-10">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Get in Touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="size-4 text-gold" />
                  <span className="relative">
                    WhatsApp
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+212600000000"
                  className="group/link flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-gold" />
                  <span className="relative">
                    +212 6 00 00 00 00
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@jmhousing-hospitality.com"
                  className="group/link flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-gold" />
                  <span className="relative break-all">
                    hello@jmhousing-hospitality.com
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} J&amp;M Housing Hospitality. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            {LEGAL_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative -mt-2 pb-6 select-none text-center font-serif leading-none font-bold text-white/5 sm:pb-8 lg:-mt-4 lg:pb-10"
      >
        <span className="text-[11vw]">J&amp;M HOUSING</span>
      </div>

      <p
        className="relative m-0 pt-2 pb-6 text-center text-[11px]"
        style={{ color: "#8a8378" }}
      >
        &copy; {new Date().getFullYear()} Designed and developed by{" "}
        <a
          style={{ textDecorationColor: "rgba(138,131,120,0.3)" }}
          className="underline underline-offset-2 transition-colors duration-200 hover:text-[#B2693F]"
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stallion Advertising
        </a>
        .
      </p>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link relative inline-block text-white/70 transition-colors hover:text-white"
    >
      {children}
      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
    </Link>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 8.5h-2c-.8 0-1.5.7-1.5 1.5v2h3.5l-.5 3H11.5v7h-3v-7H6v-3h2.5v-2.3c0-2.3 1.4-3.7 3.7-3.7H15v2.5Z" />
    </svg>
  );
}
