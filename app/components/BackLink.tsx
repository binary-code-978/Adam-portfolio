"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackLink({ href = "/" }: { href?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push(href);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      back to home
    </Link>
  );
}
