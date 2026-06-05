"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

const ROTATION_PERIOD_MS = 60_000;

interface OrbitalSkillsProps {
  className?: string;
}

export function OrbitalSkills({ className = "" }: OrbitalSkillsProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const orbitRef = useRef<HTMLUListElement | null>(null);
  const counterRefs = useRef<Array<HTMLElement | null>>([]);
  const angleRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const applyTransforms = useCallback((angle: number) => {
    if (orbitRef.current) {
      orbitRef.current.style.transform = `rotate(${angle}deg)`;
    }
    const counter = `rotate(${-angle}deg)`;
    for (const el of counterRefs.current) {
      if (el) el.style.transform = counter;
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      angleRef.current = 0;
      applyTransforms(0);
      return;
    }

    const degreesPerMs = 360 / ROTATION_PERIOD_MS;

    const tick = (now: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (hoveredRef.current === 0) {
        angleRef.current = (angleRef.current + dt * degreesPerMs) % 360;
      }
      applyTransforms(angleRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [reducedMotion, applyTransforms]);

  const enterNode = useCallback(() => {
    hoveredRef.current += 1;
  }, []);

  const leaveNode = useCallback(() => {
    hoveredRef.current = Math.max(0, hoveredRef.current - 1);
  }, []);

  const resetHover = useCallback(() => {
    hoveredRef.current = 0;
  }, []);

  const nodeCount = orbitalSkills.length;

  return (
    <motion.div
      role="region"
      aria-label="Skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={
        "relative flex h-full w-full items-center justify-center overflow-hidden " +
        className
      }
      onMouseLeave={resetHover}
    >
      <div className="orbital-bg pointer-events-none absolute inset-0" />

      <div className="orbital-stage relative flex h-full w-full items-center justify-center">
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--outer absolute rounded-full"
        />
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--mid absolute rounded-full"
        />
        <div
          aria-hidden="true"
          className="orbital-ring orbital-ring--inner absolute rounded-full"
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
          <span className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-white">
            Skills
          </span>
        </div>

        <ul ref={orbitRef} className="orbital-orbit absolute inset-0">
          {orbitalSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code;
            const angle = (i / nodeCount) * 360;
            return (
              <li
                key={skill.id}
                className="orbital-node-slot absolute top-1/2 left-1/2"
                style={{ ["--angle" as string]: `${angle}deg` }}
              >
                <span
                  ref={(el) => {
                    counterRefs.current[i] = el;
                  }}
                  className="orbital-node-counter"
                >
                  <span className="orbital-node-upright">
                    <span
                      className="orbital-node group"
                      onMouseEnter={enterNode}
                      onMouseLeave={leaveNode}
                    >
                      <span className="orbital-node__icon">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 text-white/85 transition-colors duration-200 group-hover:text-[#5DCAA5]"
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
    </motion.div>
  );
}
