"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";

interface HeroCardProps {
  className?: string;
  index?: number;
}

const heroPills = [
  "Scientific Research",
  "Lab Documentation",
  "Data Analysis",
  "Python",
  "Leadership",
];

function HelixDecoration() {
  const rows = 12;
  const dots = Array.from({ length: rows }, (_, i) => {
    const t = i / (rows - 1);
    const y = 8 + t * 144;
    const xA = 80 + Math.sin(t * Math.PI * 2.2) * 50;
    const xB = 80 - Math.sin(t * Math.PI * 2.2) * 50;
    return { y, xA, xB };
  });

  return (
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute right-4 bottom-4 hidden h-32 w-32 opacity-[0.35] sm:block"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <g key={i}>
          <circle cx={d.xA} cy={d.y} r="2.2" fill="#85B7EB" />
          <circle cx={d.xB} cy={d.y} r="2.2" fill="#AFA9EC" />
          <line
            x1={d.xA}
            y1={d.y}
            x2={d.xB}
            y2={d.y}
            stroke="#5DCAA5"
            strokeOpacity="0.35"
            strokeWidth="0.8"
          />
        </g>
      ))}
    </svg>
  );
}

export function HeroCard({ className = "", index = 0 }: HeroCardProps) {
  const dartmouth = resume.education.find((e) =>
    e.school.includes("Dartmouth")
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={
        "relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl bg-[#131316] p-6 sm:p-8 md:p-10 " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        className
      }
    >
      <HelixDecoration />

      <div className="relative">
        <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
          {resume.contact.name.toLowerCase()} — portfolio
        </div>
        <h1 className="text-[28px] sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-white break-words">
          Engineering biology,{" "}
          <span className="bg-gradient-to-r from-[#5DCAA5] via-[#85B7EB] to-[#AFA9EC] bg-clip-text text-transparent">
            one base pair at a time.
          </span>
        </h1>
      </div>

      <div className="relative mt-8">
        <div className="mb-4 text-sm text-white/60">
          {dartmouth
            ? `10th grade · ${dartmouth.school} · ${dartmouth.location}`
            : null}
        </div>
        <ul className="flex flex-wrap gap-2">
          {heroPills.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
            >
              {pill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
