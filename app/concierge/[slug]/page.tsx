import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/footer";
import { ServiceDetail } from "@/components/concierge/service-detail";
import { getServiceBySlug, SERVICES } from "@/components/concierge/services-data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: PageProps<"/concierge/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <SiteHeader forceSolid />
      <ServiceDetail service={service} />
      <Footer />
    </main>
  );
}
