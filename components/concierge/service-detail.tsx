import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ConciergeService } from "./services-data";

export function ServiceDetail({ service }: { service: ConciergeService }) {
  return (
    <div className="bg-white">
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden sm:h-[60vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

        <div className="absolute inset-x-0 top-24 px-6 sm:px-10 lg:px-[5.8vw]">
          <Link
            href="/#concierge"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Concierge
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 sm:pb-14 lg:px-[5.8vw]">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex items-center gap-3 text-gold">
              <service.icon className="size-5" strokeWidth={1.5} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">
                Concierge · {service.n}
              </span>
            </div>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-xl text-white/80">{service.tagline}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-[5.8vw]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <section>
              <h2 className="flex items-center gap-3 font-serif text-2xl text-foreground">
                <span className="h-5 w-1 bg-gold" aria-hidden="true" />
                Overview
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground/70">
                {service.longDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="flex items-center gap-3 font-serif text-2xl text-foreground">
                <span className="h-5 w-1 bg-gold" aria-hidden="true" />
                Why guests love it
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex items-start gap-3.5 border border-foreground/10 bg-cream/40 px-4 py-4"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-gold">
                      <highlight.icon className="size-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {highlight.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="flex items-center gap-3 font-serif text-2xl text-foreground">
                <span className="h-5 w-1 bg-gold" aria-hidden="true" />
                What&apos;s included
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-gold"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-foreground/75">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="flex items-center gap-3 font-serif text-2xl text-foreground">
                <span className="h-5 w-1 bg-gold" aria-hidden="true" />
                How it works
              </h2>
              <div className="mt-6 space-y-6">
                {service.steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/40 font-serif text-sm text-gold">
                        {index + 1}
                      </span>
                      {index < service.steps.length - 1 && (
                        <span
                          className="mt-1 w-px flex-1 bg-foreground/10"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-medium text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-foreground/10 bg-cream/40 p-7">
              <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                Pricing
              </p>
              <p className="mt-2 font-serif text-3xl text-foreground">
                {service.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Arranged by our concierge team ahead of your stay. Contact us
                with your dates and preferences for a tailored plan.
              </p>
              <Link
                href="/#contact"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-gold text-xs font-semibold tracking-[0.15em] text-white uppercase shadow-sm transition-colors hover:bg-gold/90"
              >
                Request this service
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/#concierge"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-[5px] border border-foreground/15 text-xs font-semibold tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:border-gold/40 hover:text-foreground"
              >
                View other services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
