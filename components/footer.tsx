import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import logo from "@/app/assets/logo.png";

const EXPLORE_LINKS = [
  { label: "Properties", href: "/collection" },
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-[5.8vw] lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={logo} alt="J&M Housing" className="h-10 w-auto invert" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              More than a place to stay. Your Moroccan experience starts
              here.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Get in Touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="size-4 text-gold" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+212600000000"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-gold" />
                  +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@jmhousing-hospitality.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-gold" />
                  hello@jmhousing-hospitality.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} J&amp;M Housing Hospitality. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs tracking-[0.1em] text-white/50 uppercase">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
