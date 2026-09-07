import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BedDouble,
  CalendarCheck,
  Car,
  ChefHat,
  Clock,
  Gift,
  Gauge,
  Heart,
  MapPinned,
  MessageCircle,
  Mountain,
  PartyPopper,
  Plane,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";

import chefImage from "@/app/assets/Private Home Chef .jpg";
import transferImage from "@/app/assets/VIP Airport.jpg";
import familyImage from "@/app/assets/Family.jpg";
import excursionsImage from "@/app/assets/Excursions.jpg";

export type ConciergeService = {
  slug: string;
  n: string;
  icon: LucideIcon;
  image: StaticImageData;
  title: string;
  tagline: string;
  price: string;
  description: string;
  longDescription: string[];
  highlights: { icon: LucideIcon; title: string; description: string }[];
  included: string[];
  steps: { title: string; description: string }[];
};

export const SERVICES: ConciergeService[] = [
  {
    slug: "private-home-chef",
    n: "01",
    icon: ChefHat,
    image: chefImage,
    title: "Private Home Chef",
    tagline: "Authentic Moroccan flavors, cooked in your own kitchen",
    price: "From 500 MAD",
    description:
      "Tajine, pastilla, mechoui... Enjoy an authentic Moroccan culinary experience prepared directly at your accommodation.",
    longDescription: [
      "Skip the restaurant reservations and let Marrakech come to your table. Our private chefs prepare traditional Moroccan dishes — tajine, pastilla, couscous, mechoui — using fresh, local ingredients, right in your villa or riad's kitchen.",
      "Every menu is tailored to your group: family-friendly options, vegetarian dishes, or a full multi-course feast for a special occasion. The chef handles the shopping, cooking, and clean-up, so you simply sit down and enjoy.",
    ],
    highlights: [
      {
        icon: Utensils,
        title: "Custom menus",
        description: "Choose from classic Moroccan staples or ask for a fully bespoke menu.",
      },
      {
        icon: Sparkles,
        title: "Fresh, local ingredients",
        description: "Sourced same-day from Marrakech's markets for the best flavor.",
      },
      {
        icon: Heart,
        title: "Dietary needs covered",
        description: "Vegetarian, halal, gluten-free and allergy-friendly options available.",
      },
      {
        icon: Clock,
        title: "Flexible scheduling",
        description: "Breakfast, lunch, dinner, or a celebration menu — booked around your stay.",
      },
    ],
    included: [
      "Personal chef for the full service duration",
      "Market shopping for fresh ingredients",
      "Full meal preparation on-site",
      "Table setting and serving",
      "Kitchen clean-up after the meal",
    ],
    steps: [
      {
        title: "Tell us your preferences",
        description: "Share your group size, dietary needs and preferred date.",
      },
      {
        title: "We build your menu",
        description: "Our concierge team confirms a menu and price with you before booking.",
      },
      {
        title: "The chef arrives and cooks",
        description: "Ingredients are sourced fresh and the meal is prepared in your kitchen.",
      },
      {
        title: "Sit back and enjoy",
        description: "Dinner is served — clean-up is taken care of for you.",
      },
    ],
  },
  {
    slug: "vip-airport-transfer",
    n: "02",
    icon: Car,
    image: transferImage,
    title: "VIP Airport Transfer",
    tagline: "A seamless, private arrival from the moment you land",
    price: "From 300 MAD",
    description:
      "Mercedes E-Class or V-Class with private driver, airport meet & greet and a seamless arrival.",
    longDescription: [
      "Your holiday starts the second you step off the plane. Our driver waits for you at Marrakech Menara Airport arrivals with a name board, helps with your luggage, and takes you straight to your accommodation in a private, air-conditioned Mercedes.",
      "No queuing for taxis, no negotiating fares, no uncertainty. Just a smooth, comfortable, and safe ride — available around the clock for any flight time, and the same service arranged for your departure.",
    ],
    highlights: [
      {
        icon: Plane,
        title: "Meet & greet",
        description: "Your driver waits inside arrivals with a personalized name board.",
      },
      {
        icon: Gauge,
        title: "Premium fleet",
        description: "Mercedes E-Class or V-Class, depending on your group size.",
      },
      {
        icon: Clock,
        title: "Flight tracking",
        description: "We monitor your flight so pick-up time adjusts to delays automatically.",
      },
      {
        icon: ShieldCheck,
        title: "Licensed, vetted drivers",
        description: "Professional, English/French-speaking drivers you can rely on.",
      },
    ],
    included: [
      "Private meet & greet at arrivals",
      "Luggage assistance",
      "Air-conditioned private vehicle",
      "Direct transfer to your accommodation",
      "Return transfer available on request",
    ],
    steps: [
      {
        title: "Share your flight details",
        description: "Send us your flight number, date and arrival time.",
      },
      {
        title: "We confirm your driver",
        description: "You receive your driver's name and contact ahead of arrival.",
      },
      {
        title: "Land and get greeted",
        description: "Your driver is waiting at arrivals, tracking your flight in real time.",
      },
      {
        title: "Relax on the way",
        description: "A direct, comfortable ride straight to your door.",
      },
    ],
  },
  {
    slug: "family-pack",
    n: "03",
    icon: Baby,
    image: familyImage,
    title: "Family Pack",
    tagline: "Everything your little ones need, set up before you arrive",
    price: "Free",
    description:
      "Crib, high chair, stroller and children's games. Everything prepared before your arrival.",
    longDescription: [
      "Traveling with young children shouldn't mean packing half the nursery. Our Family Pack equips your accommodation with baby and toddler essentials before you even check in — so you can travel light and settle in fast.",
      "From a crib and high chair to a stroller and a selection of children's games, everything is cleaned, safety-checked and ready to use from the moment you walk through the door.",
    ],
    highlights: [
      {
        icon: BedDouble,
        title: "Crib & bedding",
        description: "A safe, comfortable crib set up in your room ahead of arrival.",
      },
      {
        icon: Utensils,
        title: "High chair included",
        description: "Ready for mealtimes from day one.",
      },
      {
        icon: Gift,
        title: "Games & toys",
        description: "A selection of children's games to keep little ones entertained.",
      },
      {
        icon: Heart,
        title: "Complimentary",
        description: "Included at no extra cost for families booking with us.",
      },
    ],
    included: [
      "Baby crib with clean bedding",
      "High chair",
      "Stroller",
      "Selection of children's games",
      "Full set-up completed before check-in",
    ],
    steps: [
      {
        title: "Let us know your needs",
        description: "Tell us your children's ages and what equipment you'd like.",
      },
      {
        title: "We prepare the accommodation",
        description: "Items are cleaned, checked and installed ahead of your arrival.",
      },
      {
        title: "Check in and settle in",
        description: "Everything is ready in your room — nothing to assemble.",
      },
      {
        title: "Enjoy the stay",
        description: "More time with family, less time carrying baby gear.",
      },
    ],
  },
  {
    slug: "organized-excursions",
    n: "04",
    icon: Mountain,
    image: excursionsImage,
    title: "Organized Excursions",
    tagline: "Discover Morocco beyond the riad walls",
    price: "On quote",
    description:
      "Atlas Mountains, Essaouira, Agafay Desert, quad biking, hot-air balloon and unforgettable Moroccan experiences.",
    longDescription: [
      "Marrakech is your base — but Morocco has so much more to offer. Our concierge team arranges private, guided excursions to the Atlas Mountains, the coastal town of Essaouira, the Agafay Desert, and beyond.",
      "Whether you're after an adrenaline-filled quad biking trip, a sunrise hot-air balloon ride, or a relaxed cultural day trip, every excursion is arranged with trusted local guides and transport included, tailored to your group and schedule.",
    ],
    highlights: [
      {
        icon: MapPinned,
        title: "Hand-picked destinations",
        description: "Atlas Mountains, Essaouira, Agafay Desert and more.",
      },
      {
        icon: PartyPopper,
        title: "Adventure options",
        description: "Quad biking, camel rides, hot-air balloon flights and hiking.",
      },
      {
        icon: MessageCircle,
        title: "Trusted local guides",
        description: "Experienced, vetted guides who know the region well.",
      },
      {
        icon: CalendarCheck,
        title: "Tailored to you",
        description: "Private transport and itineraries built around your dates and pace.",
      },
    ],
    included: [
      "Private transport to and from your accommodation",
      "Experienced local guide",
      "Itinerary tailored to your group",
      "Entrance fees and activities as agreed in your quote",
      "Flexible dates during your stay",
    ],
    steps: [
      {
        title: "Choose your adventure",
        description: "Tell us which excursions interest you and your group size.",
      },
      {
        title: "Receive a tailored quote",
        description: "We put together an itinerary and price based on your preferences.",
      },
      {
        title: "We handle logistics",
        description: "Transport and guides are booked and confirmed ahead of time.",
      },
      {
        title: "Go explore",
        description: "Enjoy a private, well-organized day beyond the city.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
