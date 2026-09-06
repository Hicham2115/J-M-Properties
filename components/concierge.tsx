import Image, { type StaticImageData } from "next/image";
import { ArrowRight, Baby, Car, ChefHat, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import chefImage from "@/app/assets/Private Home Chef .jpg";
import transferImage from "@/app/assets/VIP Airport.jpg";
import familyImage from "@/app/assets/Family.jpg";
import excursionsImage from "@/app/assets/Excursions.jpg";

type ConciergeService = {
  n: string;
  icon: LucideIcon;
  image: StaticImageData;
  title: string;
  price: string;
  description: string;
};

const SERVICES: ConciergeService[] = [
  {
    n: "01",
    icon: ChefHat,
    image: chefImage,
    title: "Private Home Chef",
    price: "From 500 MAD",
    description:
      "Tajine, pastilla, mechoui... Enjoy an authentic Moroccan culinary experience prepared directly at your accommodation.",
  },
  {
    n: "02",
    icon: Car,
    image: transferImage,
    title: "VIP Airport Transfer",
    price: "From 300 MAD",
    description:
      "Mercedes E-Class or V-Class with private driver, airport meet & greet and a seamless arrival.",
  },
  {
    n: "03",
    icon: Baby,
    image: familyImage,
    title: "Family Pack",
    price: "Free",
    description:
      "Crib, high chair, stroller and children's games. Everything prepared before your arrival.",
  },
  {
    n: "04",
    icon: Mountain,
    image: excursionsImage,
    title: "Organized Excursions",
    price: "On quote",
    description:
      "Atlas Mountains, Essaouira, Agafay Desert, quad biking, hot-air balloon and unforgettable Moroccan experiences.",
  },
];

export function Concierge() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
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
              <a
                href="/contact"
                className="group/link mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold uppercase transition-colors hover:text-gold/80"
              >
                Add to Your Stay
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
