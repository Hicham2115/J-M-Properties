import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { WhyUs } from "@/components/why-us";
import { Concierge } from "@/components/concierge";
import { Reviews } from "@/components/reviews";
import { Portfolio } from "@/components/portfolio";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FadeIn>
          <FeaturedProperties />
        </FadeIn>
        <FadeIn>
          <WhyUs />
        </FadeIn>
        <FadeIn>
          <Concierge />
        </FadeIn>
        <FadeIn>
          <Reviews />
        </FadeIn>
        <FadeIn>
          <Portfolio />
        </FadeIn>
        <FadeIn>
          <Faq />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
