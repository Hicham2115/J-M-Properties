import { lenisRef } from "@/components/providers/smooth-scroll-provider";

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;

  if (lenisRef.current) {
    lenisRef.current.scrollTo(target, { offset: -96 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return true;
}

export function handleSectionNavClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const [path, hash] = href.split("#");
  if (!hash) return;
  if (path && path !== "/" && path !== window.location.pathname) return;

  const scrolled = scrollToSection(hash);
  if (scrolled) event.preventDefault();
}
