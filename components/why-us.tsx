import Image from "next/image";
import villaNerolia1 from "@/app/assets/Villa Nerolia/1.jpeg";
import villaNerolia2 from "@/app/assets/Villa Nerolia/2.jpeg";
import villaNerolia3 from "@/app/assets/Villa Nerolia/3.jpeg";
import villaNerolia4 from "@/app/assets/Villa Nerolia/4.jpeg";
import villaNerolia5 from "@/app/assets/Villa Nerolia/5.jpeg";

const REASONS = [
  {
    n: "01",
    title: "Local, Not Outsourced",
    body: "Every residence sits minutes from our office. When something needs attention, one of us shows up — not a call centre in another time zone.",
  },
  {
    n: "02",
    title: "Vetted In Person",
    body: "We don't list a place until we've slept in it ourselves. What you see in the photos is what you'll find at the door.",
  },
  {
    n: "03",
    title: "One Point of Contact",
    body: "From booking to checkout, you speak to the same concierge — in English, French or Darija.",
  },
  {
    n: "04",
    title: "Fair, Upfront Pricing",
    body: "The price you're quoted is the price you pay. No cleaning fee sprung on you at the door.",
  },
] as const;

export function WhyUs() {
  return (
    <section
      id="why-jm"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              <span
                className="size-1 rounded-full bg-gold"
                aria-hidden="true"
              />
              Why J&amp;M Housing
            </p>

            <h2 className="font-serif text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              We Don&apos;t Manage Properties.
              <br />
              We Curate Stays<span className="text-gold">.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Marrakech has no shortage of listings. What it lacks is{" "}
              <span className="font-serif text-gold italic">
                accountability
              </span>{" "}
              — a name behind the key, someone who answers when a stay goes
              sideways.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              We built J&amp;M to close that gap: a small, hands-on team that
              treats every villa, riad and apartment as if it carried our own
              name on the door, not just the guest&apos;s.
            </p>
          </div>

          <div className="mx-auto w-full max-w-110 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative row-span-2 overflow-hidden rounded-sm">
                <Image
                  src={villaNerolia1}
                  alt="Living room of Villa Nerolia, a J&M Housing villa in Marrakech"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-47.5 overflow-hidden rounded-sm sm:h-57.5 lg:h-67.5">
                <Image
                  src={villaNerolia2}
                  alt="Salon of Villa Nerolia, a J&M Housing villa in Marrakech"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-47.5 overflow-hidden rounded-sm sm:h-57.5 lg:h-67.5">
                <Image
                  src={villaNerolia5}
                  alt="Bedroom of Villa Nerolia, a J&M Housing villa in Marrakech"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 border-t border-white/10 pt-14 sm:grid-cols-2 sm:gap-x-10 lg:mt-28 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {REASONS.map((reason) => (
            <div key={reason.n} className="group lg:px-8 lg:first:pl-0">
              <span className="font-serif text-3xl text-white/20 transition-colors duration-300 group-hover:text-gold">
                {reason.n}
              </span>
              <h3 className="mt-4 font-serif text-xl text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
