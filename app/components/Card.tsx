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
}: CardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={
        "relative flex min-w-0 flex-col scroll-mt-24 rounded-2xl bg-[#131316] p-6 " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        (href ? "group " : "") +
        className
      }
    >
      {href ? (
        <Link
          href={href}
          aria-label={ariaLabel ?? title ?? "open"}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#85b7eb]"
        />
      ) : null}
      {arrow ? (
        <ArrowUpRight
          className={
            "absolute top-5 right-5 h-4 w-4 text-white/50 transition-colors " +
            (href ? "group-hover:text-white" : "")
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
