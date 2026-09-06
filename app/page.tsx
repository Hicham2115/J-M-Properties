import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { WhyUs } from "@/components/why-us";
import { Concierge } from "@/components/concierge";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProperties />
        <WhyUs />
        <Concierge />
      </main>
      <Footer />
    </>
  );
}
