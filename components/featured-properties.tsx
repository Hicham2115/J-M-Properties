import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyCard, type Property } from "@/components/property-card";
import { getPropertyBySlug } from "@/components/collections/properties-data";

const FEATURED_SLUGS = ["villa-panorama", "appart-mabrouka", "duplex-manis"];

const FEATURED_PROPERTIES: Property[] = FEATURED_SLUGS.map((slug) => {
  const property = getPropertyBySlug(slug);
  if (!property) {
    throw new Error(`Featured property not found: ${slug}`);
  }
  return {
    id: property.slug,
    name: property.name,
    type: property.type,
    location: property.location,
    guests: property.beds * 2,
    bedrooms: property.beds,
    bathrooms: property.beds,
    priceFromMad: property.pricing.low,
    image: property.image ?? property.images[0],
    href: `/collection/${property.slug}`,
  };
});

export function FeaturedProperties() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Featured Properties
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Exceptional Stays,
              <br />
              Unforgettable Moments.
            </h2>
            <p className="mt-5 max-w-lg text-foreground/70">
              Carefully selected villas, riads and apartments, each with its
              own unique character, designed for an extraordinary Moroccan
              experience.
            </p>
          </div>

          <Link
            href="/collection"
            className="group hidden shrink-0 items-center gap-2 text-xs font-bold tracking-[0.15em] text-gold uppercase transition-colors hover:text-gold/80 sm:flex"
          >
            View All Properties
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {FEATURED_PROPERTIES.map((property, index) => (
            <span
              key={property.id}
              className={
                index === 0
                  ? "h-1.5 w-8 rounded-full bg-gold"
                  : "size-1.5 rounded-full bg-foreground/20"
              }
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
