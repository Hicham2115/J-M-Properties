import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/footer";
import { PropertyDetail } from "@/components/collections/property-detail";
import { getPropertyBySlug, properties } from "@/components/collections/properties-data";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyPage({ params }: PageProps<"/collection/[slug]">) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <SiteHeader forceSolid />
      <PropertyDetail property={property} />
      <Footer />
    </main>
  );
}
