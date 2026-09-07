import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  n: string;
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    n: "01",
    question: "How do I book a property?",
    answer:
      "Browse our collection, choose your dates and guest count, then reach out via WhatsApp or the booking inquiry on the property page. Our concierge team confirms availability and finalizes payment with you directly.",
  },
  {
    n: "02",
    question: "Can I add concierge services after booking?",
    answer:
      "Yes. Private chef, VIP airport transfer, family pack and organized excursions can all be added at any time before your stay — just message your concierge or use the \"Add to Your Stay\" links on the concierge section.",
  },
  {
    n: "03",
    question: "Is airport transfer included in my stay?",
    answer:
      "Airport transfer is a separate add-on starting from 300 MAD, arranged with a private driver in a Mercedes E-Class or V-Class, including meet & greet on arrival.",
  },
  {
    n: "04",
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms vary by property and season. Your concierge will confirm the exact policy for your dates before you pay, so there are no surprises later.",
  },
  {
    n: "05",
    question: "Do you offer support during my stay?",
    answer:
      "Every guest has a dedicated concierge reachable by WhatsApp throughout their stay, from check-in to check-out, for anything from maintenance requests to booking a last-minute excursion.",
  },
];

export function Faq() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              FAQ
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Questions, Answered<span className="text-gold">.</span>
            </h2>
            <p className="mt-5 max-w-sm text-foreground/70">
              Everything you need to know before booking your stay. Still
              curious about something?{" "}
              <a
                href="https://wa.me/212706089488"
                target="_blank"
                rel="noreferrer"
                className="group/link relative inline-flex items-center gap-1 font-medium text-gold"
              >
                Message our concierge
                <ArrowRight className="size-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-gold/40 transition-transform duration-300 group-hover/link:scale-x-0" />
              </a>
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.n}
                value={faq.n}
                className="group border-b border-foreground/10 first:border-t"
              >
                <AccordionTrigger className="gap-6 py-6 text-left transition-colors hover:no-underline [&>svg]:size-4 [&>svg]:text-gold/40 [&>svg]:transition-colors group-hover:[&>svg]:text-gold group-data-[state=open]:[&>svg]:text-gold">
                  <span className="flex items-baseline gap-5">
                    <span className="font-serif text-sm text-gold/50 transition-colors group-data-[state=open]:text-gold">
                      {faq.n}
                    </span>
                    <span className="font-serif text-lg text-foreground transition-colors sm:text-xl group-hover:text-gold group-data-[state=open]:text-gold">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-15 text-sm leading-relaxed text-foreground/65">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
