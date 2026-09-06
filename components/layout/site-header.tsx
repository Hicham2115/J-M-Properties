"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import logo from "@/app/assets/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collection" },
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled
          ? "border-gold/15 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-white/15 bg-black/10 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 pt-3 pb-2 sm:px-10 sm:pt-3.5 sm:pb-2.5 lg:px-[5.8vw] lg:pt-4 lg:pb-3">
        <Link
          href="/"
          className="flex items-center"
          aria-label="J&M Housing home"
        >
          <Image
            src={logo}
            alt="J&M Housing"
            className={cn("h-7 w-auto sm:h-8 lg:h-9", isScrolled && "invert")}
            priority
          />
        </Link>

        <NavigationMenu viewport={false} className="hidden max-w-none lg:flex">
          <NavigationMenuList className="gap-10 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "rounded-none bg-transparent p-0 text-sm  hover:bg-transparent focus:bg-transparent",
                    link.label === "Home"
                      ? "text-gold hover:text-gold"
                      : isScrolled
                        ? "text-foreground/80 hover:text-foreground"
                        : "text-white/90 hover:text-white",
                  )}
                >
                  <Link
                    href={link.href}
                    className="group/navlink relative inline-block pb-2"
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover/navlink:scale-x-100",
                        link.label === "Home" && "scale-x-100",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-10 rounded-[5px] bg-gold px-5 text-xs font-semibold tracking-[0.15em] text-white shadow-sm hover:bg-gold/90"
          >
            <Link href="/collection">
              EXPLORE PROPERTIES
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <Popover>
          <PopoverTrigger
            asChild
            className={cn(
              "rounded-sm p-2 lg:hidden",
              isScrolled ? "text-foreground" : "text-white",
            )}
          >
            <button type="button" aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-64 border-gold/20 bg-white p-2 lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-sm px-3 py-2 text-sm tracking-wide hover:bg-gold/10",
                    link.label === "Home" ? "text-gold" : "text-foreground/80",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 h-11 rounded-sm bg-gold text-xs font-semibold tracking-[0.15em] text-white hover:bg-gold/90"
              >
                <Link href="/collection">
                  EXPLORE PROPERTIES
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
