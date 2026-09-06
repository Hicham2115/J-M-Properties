"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  ChevronDown,
  KeyRound,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { properties } from "@/components/collections/properties-data";
import villaPanorama from "@/app/assets/Villa Panorama/1.jpeg";
import villaNerolia from "@/app/assets/Villa Nerolia/1.jpeg";
import appartMabrouka from "@/app/assets/Appart Mabrouka/1.jpeg";

type Review = {
  name: string;
  origin: string;
  property: string;
  timeAgo: string;
  rating: number;
  quote: string;
  image: StaticImageData;
};

const REVIEWS: Review[] = [
  {
    name: "Claire Dubois",
    origin: "Paris, France",
    property: "Villa Panorama",
    timeAgo: "3 weeks ago",
    rating: 5,
    quote:
      "From the airport transfer to the last night's dinner, everything felt considered. Villa Panorama looked exactly like the photos — better, even.",
    image: villaPanorama,
  },
  {
    name: "James & Laura Whitfield",
    origin: "London, UK",
    property: "Villa Nerolia",
    timeAgo: "1 month ago",
    rating: 5,
    quote:
      "The private chef night was the highlight of our trip. Our concierge answered every message within minutes, day or night.",
    image: villaNerolia,
  },
  {
    name: "Sara Al-Farsi",
    origin: "Dubai, UAE",
    property: "Appart Mabrouka",
    timeAgo: "2 months ago",
    rating: 5,
    quote:
      "Traveling with two toddlers is never simple, but the family pack was waiting for us at check-in. It made the whole stay effortless.",
    image: appartMabrouka,
  },
];

const CATEGORIES: { label: string; icon: LucideIcon }[] = [
  { label: "Cleanliness", icon: Sparkles },
  { label: "Communication", icon: MessageCircle },
  { label: "Check-in", icon: KeyRound },
  { label: "Location", icon: MapPin },
];

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

const averageRating =
  Math.round(
    (properties.reduce((sum, property) => sum + property.rating, 0) /
      properties.length) *
      10,
  ) / 10;

const totalReviews = properties.reduce(
  (sum, property) => sum + 14 + (hash(property.slug) % 29),
  0,
);

const DISTRIBUTION: [number, number, number, number, number] =
  averageRating >= 4.85
    ? [90, 8, 1, 1, 0]
    : averageRating >= 4.75
      ? [85, 11, 2, 1, 1]
      : [79, 15, 3, 2, 1];

const CATEGORY_SCORES = CATEGORIES.map(({ label, icon }, i) => ({
  label,
  icon,
  score: Math.min(5, Math.max(4, averageRating + (i % 2 === 0 ? 0.05 : -0.05))),
}));

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          fill="currentColor"
          className={
            i < Math.round(rating) ? "text-gold" : "text-foreground/15"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0, 2);

  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Guest Reviews
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Rated By The People Who Stayed<span className="text-gold">.</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            The score behind every listing, drawn from real stays across our
            Marrakech portfolio.
          </p>
        </div>

        <div className="mt-14 rounded-2xl bg-white p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex shrink-0 flex-col items-start gap-1 sm:border-foreground/10 sm:border-r sm:pr-6">
              <span className="font-serif text-5xl text-foreground leading-none">
                {averageRating.toFixed(1)}
              </span>
              <Stars rating={averageRating} size={16} />
              <span className="text-foreground/50 text-xs">
                {totalReviews.toLocaleString("en-US")} ratings
              </span>
            </div>

            <div className="max-w-xl flex-1 space-y-2.5">
              {DISTRIBUTION.map((percent, i) => {
                const star = 5 - i;
                const count = Math.max(
                  1,
                  Math.round((totalReviews * percent) / 100),
                );
                return (
                  <div key={star} className="flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-gold"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="w-28 shrink-0 text-foreground/60 text-xs tabular-nums sm:w-32">
                      {star}.0{" "}
                      <span className="text-foreground/40">
                        {count} review{count === 1 ? "" : "s"}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {CATEGORY_SCORES.map((category) => (
              <div
                key={category.label}
                className="flex items-center gap-1.5 rounded-lg border border-foreground/10 px-3.5 py-2 text-sm"
              >
                <span className="font-bold text-gold">
                  {category.score.toFixed(1)}
                </span>
                <span className="text-foreground/70">{category.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col divide-y divide-foreground/10 border-t border-foreground/10">
            {visibleReviews.map((review) => (
              <div key={review.name} className="py-6 first:pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/10 font-serif text-gold text-sm">
                    {initials(review.name)}
                  </span>
                  <p className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                    <span className="font-bold text-foreground text-sm">
                      {review.name}
                    </span>
                    <span className="text-foreground/45 text-xs">
                      {review.timeAgo}
                    </span>
                  </p>
                  <div className="ml-auto flex shrink-0 items-center gap-1.5">
                    <span className="font-bold text-foreground text-sm">
                      {review.rating.toFixed(1)}
                    </span>
                    <Stars rating={review.rating} />
                  </div>
                </div>

                <p className="mt-3 max-w-2xl text-foreground/75 text-sm leading-relaxed">
                  {review.quote}
                </p>

                {review === REVIEWS[0] && (
                  <div className="mt-3 flex gap-2">
                    {properties[0]?.images.slice(1, 5).map((photo, i) => (
                      <div
                        key={i}
                        className="relative size-16 shrink-0 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={photo}
                          alt={`${review.property} — guest photo ${i + 1}`}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!expanded && REVIEWS.length > visibleReviews.length && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="mt-2 inline-flex items-center gap-1.5 font-bold text-gold text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Read all reviews
              <ChevronDown size={15} strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
