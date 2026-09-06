import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmhousing-hospitality.com"),
  title: {
    default: "J&M Housing | Luxury Villas & Riads in Marrakech",
    template: "%s | J&M Housing",
  },
  description:
    "Discover exceptional villas, riads and apartments in Marrakech, paired with private chefs, VIP airport transfers and bespoke Moroccan experiences. Your Moroccan experience starts here.",
  keywords: [
    "villas in Marrakech",
    "luxury villas Marrakech",
    "vacation rentals Marrakech",
    "riads Marrakech",
    "apartments Marrakech",
    "luxury accommodation Morocco",
    "Marrakech concierge",
    "private chef Marrakech",
  ],
  openGraph: {
    title: "J&M Housing | Luxury Villas & Riads in Marrakech",
    description:
      "Carefully selected villas, riads and apartments, paired with concierge services and authentic Moroccan experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
