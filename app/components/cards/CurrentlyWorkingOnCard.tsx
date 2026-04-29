"use client";

import { motion } from "framer-motion";
import { currentlyWorkingOn, type CurrentProject } from "@/lib/resume";

interface CurrentlyWorkingOnCardProps {
  className?: string;
  index?: number;
  maxItems?: number;
}

function StatusPill({ status }: { status: CurrentProject["status"] }) {
  if (status === "active") return null;

  if (status === "completing soon") {
    return (
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
        completing soon
      </span>
    );
  }

  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/20">
      upcoming
    </span>
  );
}

export function CurrentlyWorkingOnCard({
  className = "",
  index = 0,
  maxItems,
}: CurrentlyWorkingOnCardProps) {
  const items =
    typeof maxItems === "number"
      ? currentlyWorkingOn.slice(0, maxItems)
      : currentlyWorkingOn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={
        "relative flex min-w-0 flex-col rounded-2xl bg-[#131316] p-6 " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        className
      }
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className="animate-pulse bg-emerald-400 w-1.5 h-1.5 rounded-full inline-block"
          aria-hidden="true"
        />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
          currently working on
        </span>
      </div>

      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={
              "flex items-start justify-between gap-3 py-3 " +
              (i > 0 ? "border-t border-white/[0.06]" : "")
            }
          >
            <div className="min-w-0">
              <div className="text-sm font-medium text-white">
                {item.title}
              </div>
              <div className="mt-0.5 text-xs text-white/55">{item.detail}</div>
            </div>
            <div className="shrink-0 pt-0.5">
              <StatusPill status={item.status} />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
