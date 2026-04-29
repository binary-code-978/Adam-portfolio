"use client";

import { motion } from "framer-motion";
import { latest } from "@/lib/resume";

interface LatestStripProps {
  className?: string;
  index?: number;
}

export function LatestStrip({ className = "", index = 0 }: LatestStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={
        "relative flex min-w-0 items-center gap-4 overflow-x-auto rounded-2xl bg-[#131316] py-3 px-4 " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        className
      }
    >
      <div className="shrink-0 text-xs uppercase tracking-wider text-white/45">
        Latest
      </div>
      <ul className="flex min-w-0 items-center">
        {latest.map((item, i) => (
          <li
            key={item.title}
            className={
              "shrink-0 flex items-baseline gap-2 px-4 " +
              (i > 0 ? "border-l border-white/[0.08]" : "")
            }
          >
            <span className="text-xs text-white/45 whitespace-nowrap">
              {item.date}
            </span>
            <span className="text-sm text-white/85 whitespace-nowrap">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
