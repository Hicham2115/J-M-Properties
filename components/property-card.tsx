import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Heart, MapPin, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PropertyType } from "@/components/collections/properties-data";

export type Property = {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  priceFromMad: number;
  image: string | StaticImageData;
  href: string;
};

export function PropertyCard({ property }: { property: Property }) {
  const {
    name,
    type,
    location,
    guests,
    bedrooms,
    bathrooms,
    priceFromMad,
    image,
    href,
  } = property;

  return (
    <article className="group transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-neutral-200 shadow-none transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/10">
        <Link href={href} className="absolute inset-0 z-0" tabIndex={-1}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <span className="absolute top-4 left-4 z-10 rounded-sm bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white uppercase">
          {type}
        </span>

        <button
          type="button"
          aria-label="Save property"
          className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-foreground transition-colors hover:bg-white"
        >
          <Heart className="size-4" />
        </button>
      </div>

      <div className="pt-5">
        <Link href={href} className="inline-block">
          <h3 className="font-serif text-2xl text-foreground transition-colors duration-300 group-hover:text-gold">
            {name}
          </h3>
        </Link>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-foreground/60">
          <MapPin className="size-3.5 text-gold" />
          {location}
        </p>

        <div className="mt-4 flex items-center gap-4 border-b border-foreground/10 pb-4 text-sm text-foreground/70">
          <span className="flex items-center gap-1.5">
            <Users className="size-4 text-gold" />
            {guests} Guests
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-gold" />
            {bedrooms} Bedrooms
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4 text-gold" />
            {bathrooms} Bathrooms
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.15em] text-foreground/50 uppercase">
              From
            </p>
            <p className="font-serif text-2xl text-gold">
              {priceFromMad.toLocaleString("en-US")}{" "}
              <span className="font-sans text-sm text-foreground/60">
                MAD / night
              </span>
            </p>
          </div>
          <Button
            asChild
            size="sm"
            className="rounded-sm bg-gold text-[11px] font-bold tracking-[0.1em] text-white uppercase hover:bg-gold/90"
          >
            <Link href={href} className="group/btn">
              View Property
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
