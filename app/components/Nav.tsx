"use client";

import { useLenis } from "./SmoothScroll";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "work", href: "#work" },
  { label: "research", href: "#research" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export function Nav() {
  const lenis = useLenis();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    if (typeof window !== "undefined") {
      const target = document.querySelector(href);
      if (lenis.current && target) {
        lenis.current.scrollTo(href, { offset: -72 });
      } else if (target) {
        (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
      history.replaceState(null, "", href);
    }
  };

  const scrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis.current) lenis.current.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "/");
  };

  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          onClick={scrollTop}
          className="text-sm font-medium tracking-[-0.01em] text-white/90 hover:text-white transition-colors duration-200"
        >
          adam <span className="text-white/30">─</span> portfolio
        </a>
        <ul className="flex items-center gap-4 sm:gap-7">
          {links.map((link, idx) => (
            <li key={link.href} className={idx >= 2 ? "hidden sm:block" : ""}>
              <a
                href={link.href}
                onClick={(e) => onClick(e, link.href)}
                className="text-xs sm:text-sm text-white/65 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
