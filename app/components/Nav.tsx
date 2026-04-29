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
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="text-sm font-medium tracking-[-0.01em] text-white/90"
        >
          adam <span className="text-white/30">─</span> portfolio
        </a>
        <ul className="flex items-center gap-4 sm:gap-7">
          {links.map((link, idx) => (
            <li
              key={link.href}
              className={idx >= 2 ? "hidden sm:block" : ""}
            >
              <a
                href={link.href}
                className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
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
