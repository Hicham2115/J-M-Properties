"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import villaGolfAmelkis from "@/app/assets/Appart Mabrouka/1.jpeg";

const WHATSAPP_NUMBER = "212600000000";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Hi, I'm ${name || "a traveller"} and I'd like to get in touch.`,
      email && `Email: ${email}`,
      message,
    ].filter(Boolean);

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5.8vw]">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-stretch lg:gap-20">
          <div className="relative order-2 hidden min-h-130 overflow-hidden rounded-sm lg:order-1 lg:block">
            <Image
              src={villaGolfAmelkis}
              alt="Entrance of a J&M Housing villa in Marrakech"
              fill
              sizes="45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0" />
            <p className="absolute bottom-6 left-6 max-w-[16rem] font-serif text-xl text-white leading-snug">
              Whatever the occasion, there&apos;s a door in Marrakech with your
              name on it.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Contact Us
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Let&apos;s Plan Your Stay<span className="text-gold">.</span>
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Tell us what you&apos;re after and a concierge will get back to
              you, usually within the hour.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-foreground/10 border-y py-5 text-sm">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-gold"
              >
                <MessageCircle className="size-4 text-gold" strokeWidth={1.5} />
                +212 6 00 00 00 00
              </a>
              <a
                href="mailto:hello@jmhousing-hospitality.com"
                className="inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-gold"
              >
                <Mail className="size-4 text-gold" strokeWidth={1.5} />
                hello@jmhousing-hospitality.com
              </a>
              <span className="inline-flex items-center gap-2 text-foreground/70">
                <MapPin className="size-4 text-gold" strokeWidth={1.5} />
                Marrakech, Morocco
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-bold tracking-[0.15em] text-foreground/50 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full border-0 border-b border-foreground/15 bg-transparent py-2 text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[11px] font-bold tracking-[0.15em] text-foreground/50 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full border-0 border-b border-foreground/15 bg-transparent py-2 text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="text-[11px] font-bold tracking-[0.15em] text-foreground/50 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Dates, property, number of guests — anything that helps us plan your stay."
                  className="mt-2 w-full resize-none border-0 border-b border-foreground/15 bg-transparent py-2 text-foreground placeholder:text-foreground/25 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group/btn mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-gold uppercase transition-colors hover:text-gold/80"
              >
                Send via WhatsApp
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
