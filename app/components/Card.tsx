"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  arrow?: boolean;
  index?: number;
  href?: string;
  ariaLabel?: string;
  id?: string;
  interactive?: boolean;
}

export function Card({
  eyebrow,
  title,
  children,
  className = "",
  arrow = false,
  index = 0,
  href,
  ariaLabel,
  id,
  interactive = false,
}: CardProps) {
  const hoverY = interactive ? -4 : -2;
  const hoverTransition = interactive
    ? { duration: 0.2, ease: "easeOut" as const }
    : undefined;

  const baseClasses =
    "relative flex min-w-0 flex-col scroll-mt-24 rounded-2xl p-6 " +
    "border-[0.5px] " +
    (interactive
      ? "bg-[#131316] hover:bg-[#15161a] border-white/[0.08] hover:border-emerald-400/30 cursor-pointer group "
      : "bg-[#131316] border-white/[0.08] hover:border-white/20 ") +
    "transition-colors duration-200 ";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: hoverY, transition: hoverTransition }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={baseClasses + className}
    >
      {href ? (
        <Link
          href={href}
          aria-label={ariaLabel ?? title ?? "open"}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
        />
      ) : null}
      {arrow ? (
        <ArrowUpRight
          className={
            "absolute top-5 right-5 h-4 w-4 transition-all duration-200 " +
            (interactive
              ? "text-white/40 group-hover:text-white/80 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              : "text-white/50")
          }
          aria-hidden="true"
        />
      ) : null}
      {eyebrow ? (
        <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <h2 className="mb-2 text-[15px] font-medium tracking-[-0.01em] text-white">
          {title}
        </h2>
      ) : null}
      {children ? (
        <div className="text-sm leading-relaxed text-white/70">{children}</div>
      ) : null}
    </motion.div>
  );
}
