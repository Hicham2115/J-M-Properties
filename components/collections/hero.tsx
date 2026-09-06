import { Search } from "lucide-react";
import Image from "next/image";

const searchFields = [
  { label: "Location", value: "Where are you going?" },
  { label: "Dates", value: "Check-in — Check-out" },
  { label: "Guests", value: "2 adults" },
];

export function CollectionsHero() {
  return (
    <section className="relative bg-navy px-5 pt-36 pb-16 text-white sm:px-8 sm:pt-40 sm:pb-32 lg:px-12">
      <Image
        alt=""
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/marrakech-villa-hero-crop.png"
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/75 to-navy" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-5 flex items-center justify-center gap-3 font-semibold text-gold text-xs uppercase tracking-[0.28em]">
          <span className="h-px w-8 bg-gold" />
          The collection
          <span className="h-px w-8 bg-gold" />
        </p>
        <h1 className="font-serif font-medium text-4xl leading-[1.12] tracking-tight sm:text-6xl">
          Addresses we would happily{" "}
          <span className="text-gold ">stay in ourselves.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] text-white/70 leading-relaxed">
          We choose these homes the way we'd choose our own, so every stay feels
          effortless from arrival to departure.
        </p>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-4xl px-1 sm:-bottom-14 sm:-translate-x-1/2 sm:absolute sm:left-1/2 sm:mt-0 sm:w-[calc(100%-4rem)] sm:px-0">
        <div className="grid grid-cols-1 divide-y divide-ink/10 border border-ink/10 bg-white text-ink shadow-2xl sm:grid-cols-[1fr_1fr_1fr_auto] sm:divide-x sm:divide-y-0">
          {searchFields.map(({ label, value }) => (
            <div className="px-6 py-3" key={label}>
              <span className="block font-semibold text-[11px] text-ink/45 uppercase tracking-[0.14em]">
                {label}
              </span>
              <span className="mt-1 block text-[15px] text-ink/40">
                {value}
              </span>
            </div>
          ))}
          <button
            aria-label="Search"
            className="flex items-center justify-center bg-linear-to-br from-gold to-gold-dark px-6 py-2.5 text-navy transition-opacity hover:opacity-90 sm:px-6 sm:py-3"
            type="button"
          >
            <Search size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
