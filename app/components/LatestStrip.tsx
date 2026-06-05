"use client";

import { motion } from "framer-motion";
import { latest, type LatestItem } from "@/lib/resume";

interface LatestStripProps {
  className?: string;
  index?: number;
}

const dotColor: Record<LatestItem["type"], string> = {
  completion: "#5DCAA5",
  achievement: "#85B7EB",
  certification: "#AFA9EC",
  milestone: "#5DCAA5",
};

const maskStyle = {
  maskImage:
    "linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent)",
} as const;

function TickerItem({
  item,
  showDivider,
}: {
  item: LatestItem;
  showDivider: boolean;
}) {
  return (
    <li
      className={
        "shrink-0 flex items-center gap-2 px-4 " +
        (showDivider ? "border-l border-white/[0.08]" : "")
      }
    >
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: dotColor[item.type] }}
      />
      <span className="text-xs text-white/45 whitespace-nowrap">
        {item.date}
      </span>
      <span className="text-sm text-white/85 whitespace-nowrap">
        {item.title}
      </span>
    </li>
  );
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
        "relative flex h-16 min-w-0 items-stretch overflow-hidden rounded-2xl bg-[#131316] " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        className
      }
    >
      <div className="shrink-0 flex items-center border-r border-white/[0.08] px-4 text-xs uppercase tracking-wider text-white/45">
        Latest
      </div>

      <div
        className="ticker-viewport flex-1 overflow-hidden relative flex items-center"
        style={maskStyle}
      >
        <div className="ticker-track flex w-max items-center">
          <ul className="flex items-center">
            {latest.map((item, i) => (
              <TickerItem
                key={`a-${item.title}`}
                item={item}
                showDivider={i > 0}
              />
            ))}
          </ul>
          <ul aria-hidden="true" className="flex items-center">
            {latest.map((item) => (
              <TickerItem
                key={`b-${item.title}`}
                item={item}
                showDivider={true}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
