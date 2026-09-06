import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-160 flex-col justify-center overflow-hidden bg-neutral-900 px-6 pt-32 pb-16 text-white sm:px-10 sm:pt-36 lg:min-h-200 lg:px-[5.8vw]"
      id="home"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[58%_center]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(11,13,11,0.68) 0%, rgba(11,13,11,0.47) 30%, rgba(11,13,11,0.13) 61%, rgba(11,13,11,0.03) 100%), linear-gradient(180deg, rgba(5,8,7,0.36) 0%, rgba(5,8,7,0.02) 33%, rgba(5,8,7,0.15) 70%, rgba(5,8,7,0.46) 100%), url(/marrakech-villa-hero-crop.png)",
        }}
      />

      <div className="mx-auto w-full max-w-[1600px]">
        <div className="max-w-5xl">
          <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <span className="size-1 rounded-full bg-gold" aria-hidden="true" />
            Luxury stays &amp; bespoke experiences
          </p>

          <h1 className="font-serif font-semibold tracking-tight text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Stay Beautifully, Experience
            <br />
            Morocco Differently<span className="text-gold">.</span>
          </h1>

          <p className="mt-7 mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Discover exceptional stays and personalized experiences designed
            around you.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="min-h-14 rounded-sm bg-gold px-7 text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-gold/90"
            >
              <Link href="/collection">
                Explore Properties
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-14 rounded-sm border-white/60 bg-black/25 px-7 text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/experiences">
                Discover Experiences
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1600px] items-center justify-between">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] text-gold">
          <span className="h-9 w-px bg-gold" aria-hidden="true" />
          SCROLL
        </div>
        <svg
          viewBox="0 0 40 40"
          className="hidden size-9 text-gold sm:block"
          aria-hidden="true"
        >
          <path
            d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
