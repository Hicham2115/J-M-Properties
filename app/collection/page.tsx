import { SiteHeader } from "@/components/layout/site-header";
import { CollectionsHero } from "@/components/collections/hero";
import { PropertyBrowser } from "@/components/collections/property-browser";
import { Footer } from "@/components/footer";

export default function CollectionsPage() {
  return (
    <main>
      <SiteHeader />
      <CollectionsHero />
      <PropertyBrowser />

      <section className="relative overflow-hidden bg-navy px-5 py-20 text-center text-white sm:px-8">
        <div className="relative mx-auto max-w-xl">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Concierge
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            Can&apos;t find the perfect stay?
          </h2>
          <p className="mt-3 text-[15px] text-white/70">
            Tell us what you&apos;re looking for and our concierge team will
            help you find it.
          </p>
          <a
            className="mt-8 inline-flex bg-linear-to-br from-gold to-gold-dark px-8 py-3.5 text-xs font-bold tracking-wide text-navy uppercase transition-opacity hover:opacity-90"
            href="/contact"
          >
            Contact Our Concierge
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
