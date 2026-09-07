import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/components/concierge/services-data";

export function Concierge() {
  return (
    <section
      id="concierge"
      className="scroll-mt-24 bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Concierge
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Make Your Stay Unforgettable<span className="text-gold">.</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            Premium add-ons to your accommodation, arranged by our concierge
            team before you even arrive.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="group">
              <Link href={`/concierge/${service.slug}`} className="block">
                <div className="relative aspect-4/5 overflow-hidden bg-cream">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />

                  <span className="absolute bottom-4 left-4 font-serif text-lg text-white">
                    {service.price}
                  </span>
                </div>
              </Link>

              <div className="mt-5 flex items-center gap-3">
                <service.icon
                  className="size-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] font-bold tracking-[0.2em] text-gold/70">
                  {service.n}
                </span>
                <span
                  className="h-px flex-1 bg-foreground/10"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-4 font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
              <Link
                href={`/concierge/${service.slug}`}
                className="group/link mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold uppercase transition-colors hover:text-gold/80"
              >
                Discover Services
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
