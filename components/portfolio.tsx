"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import villaPanorama from "@/app/assets/Villa Panorama/1.jpeg";
import villaPanoramaSalon from "@/app/assets/Villa Panorama/2.jpeg";
import villaPanoramaSuite from "@/app/assets/Villa Panorama/3.jpeg";
import villaGolfAmelkis from "@/app/assets/Villa Golf Amelkis/1.jpeg";
import villaZizou from "@/app/assets/Villa Zizou/1.jpeg";
import villaNerolia from "@/app/assets/Villa Nerolia/1.jpeg";
import prestigiaJubaea from "@/app/assets/Prestigia Jubaea/1.jpeg";
import prestigiaJubaea15 from "@/app/assets/Prestigia Jubaea 15/1.jpeg";
import appartYakout from "@/app/assets/Appart Yakout/1.jpeg";
import duplexManis from "@/app/assets/Duplex Manis/2.jpeg";

type Shot = { image: StaticImageData; label: string };

const SHOTS: Shot[] = [
  { image: villaPanorama, label: "Villa Panorama · Palmeraie" },
  { image: prestigiaJubaea, label: "Prestigia Jubaea · Prestigia" },
  { image: villaGolfAmelkis, label: "Villa Golf Amelkis · Amelkis" },
  { image: villaZizou, label: "Villa Zizou · Targa" },
  { image: villaNerolia, label: "Villa Nerolia · Noria Golf" },
  { image: appartYakout, label: "Appart Yakout · Guéliz" },
  { image: villaPanoramaSalon, label: "Villa Panorama · Salon" },
  { image: duplexManis, label: "Duplex Manis · Guéliz" },
  { image: prestigiaJubaea15, label: "Prestigia Jubaea 15 · Prestigia" },
  { image: villaPanoramaSuite, label: "Villa Panorama · Suite" },
];

export function Portfolio() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card instanceof HTMLElement ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundSize: "72px 72px" }}
      />

      <div className="relative">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-6 sm:px-10 lg:px-[5.8vw]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Our Portfolio
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Properties that speak <span className="text-gold">for</span>{" "}
              themselves
              <span className="text-gold">.</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll to previous photo"
              className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll to next photo"
              className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-10 lg:pl-[5.8vw] [&::-webkit-scrollbar]:hidden"
        >
          {SHOTS.map((shot) => (
            <div
              key={shot.label}
              data-card
              className="relative h-[420px] w-[280px] shrink-0 snap-start overflow-hidden sm:h-[480px] sm:w-[320px] lg:h-[560px] lg:w-[380px]"
            >
              <Image
                src={shot.image}
                alt={shot.label}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
              <p className="absolute bottom-4 left-4 text-[11px] font-bold tracking-[0.15em] text-white uppercase">
                {shot.label}
              </p>
            </div>
          ))}

          <div className="w-2 shrink-0 sm:w-6" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
