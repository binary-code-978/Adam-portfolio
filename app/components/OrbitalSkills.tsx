"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  BarChart3,
  Code,
  Dna,
  FileText,
  FlaskConical,
  Microscope,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { orbitalSkills } from "@/lib/resume";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Dna,
  FlaskConical,
  Microscope,
  Trees,
  BarChart3,
  FileText,
  BadgeCheck,
};

interface OrbitalSkillsProps {
  className?: string;
}

export function OrbitalSkills({ className = "" }: OrbitalSkillsProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const nodeCount = orbitalSkills.length;

  return (
    <div
      className={
        "relative flex h-full w-full items-center justify-center overflow-hidden " +
        className
      }
      role="region"
      aria-label="Skills"
    >
      <div className="orbital-bg pointer-events-none absolute inset-0" />

      <div className="orbital-stage relative flex h-full w-full items-center justify-center">
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--outer absolute rounded-full border border-cyan-400/10"
        />
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--mid absolute rounded-full border border-cyan-400/15"
        />
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--inner absolute rounded-full border border-cyan-400/20"
        />

        <div className="orbital-hub relative z-10 flex flex-col items-center justify-center rounded-full">
          <span
            aria-hidden="true"
            className="orbital-hub__pulse absolute inset-0 rounded-full"
          />
          <span
            aria-hidden="true"
            className="orbital-hub__core absolute inset-2 rounded-full"
          />
          <span className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100">
            Skills
          </span>
        </div>

        <ul
          className={
            "orbital-orbit absolute inset-0 " +
            (reducedMotion ? "orbital-orbit--static" : "")
          }
        >
          {orbitalSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code;
            const angle = (i / nodeCount) * 360;
            return (
              <li
                key={skill.id}
                className="orbital-node-slot absolute top-1/2 left-1/2"
                style={{ ["--angle" as string]: `${angle}deg` }}
              >
                <span className="orbital-node-counter">
                  <span className="orbital-node-upright">
                    <span className="orbital-node group">
                      <span className="orbital-node__icon">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 text-cyan-200 transition-colors duration-200 group-hover:text-cyan-50"
                        />
                      </span>
                      <span className="orbital-node__label">{skill.title}</span>
                    </span>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
