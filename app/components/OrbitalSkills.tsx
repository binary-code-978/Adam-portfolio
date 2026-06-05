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
const DEFAULT_RADIUS = 260;

function radiusForWidth(w: number): number {
  if (w >= 1280) return 300;
  if (w >= 768) return 260;
  return 110;
}

interface OrbitalSkillsProps {
  className?: string;
}

export function OrbitalSkills({ className = "" }: OrbitalSkillsProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [radius, setRadius] = useState(DEFAULT_RADIUS);

  const nodeRefs = useRef<Array<HTMLLIElement | null>>([]);
  const rotationRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredRef = useRef(0);
  const radiusRef = useRef(radius);

  useEffect(() => {
    radiusRef.current = radius;
  }, [radius]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const update = () => setRadius(radiusForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nodeCount = orbitalSkills.length;

  const applyPositions = useCallback(
    (rotation: number) => {
      const r = radiusRef.current;
      for (let i = 0; i < nodeRefs.current.length; i++) {
        const el = nodeRefs.current[i];
        if (!el) continue;
        const baseDeg = (i / nodeCount) * 360;
        const a = ((baseDeg + rotation) * Math.PI) / 180;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    },
    [nodeCount]
  );

  // Keep static positions in sync when radius changes (resize or reduced motion).
  useEffect(() => {
    applyPositions(rotationRef.current);
  }, [radius, applyPositions]);

  // Single-source-of-truth rAF loop. Both x and y of every node are recomputed
  // each frame from the same `rotationRef.current`, so the nodes cannot drift
  // apart from each other no matter how long the page has been open.
  useEffect(() => {
    if (reducedMotion) {
      rotationRef.current = 0;
      applyPositions(0);
      return;
    }

    const degreesPerMs = 360 / ROTATION_PERIOD_MS;

    const tick = (now: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (hoveredRef.current === 0) {
        rotationRef.current = (rotationRef.current + dt * degreesPerMs) % 360;
      }
      applyPositions(rotationRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [reducedMotion, applyPositions]);

  const enterNode = useCallback(() => {
    hoveredRef.current += 1;
  }, []);

  const leaveNode = useCallback(() => {
    hoveredRef.current = Math.max(0, hoveredRef.current - 1);
  }, []);

  const resetHover = useCallback(() => {
    hoveredRef.current = 0;
  }, []);

  // Initial inline style for SSR / before rAF runs. Uses DEFAULT_RADIUS so
  // server and client agree at hydration time; the resize effect adjusts on
  // mount before the visitor sees anything (entry fade covers any reflow).
  const initialStyle = (i: number): React.CSSProperties => {
    const a = ((i / nodeCount) * 360 * Math.PI) / 180;
    const x = Math.cos(a) * DEFAULT_RADIUS;
    const y = Math.sin(a) * DEFAULT_RADIUS;
    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    };
  };

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

        <ul className="absolute inset-0">
          {orbitalSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code;
            return (
              <li
                key={skill.id}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="orbital-node-slot absolute top-1/2 left-1/2"
                style={initialStyle(i)}
                onMouseEnter={enterNode}
                onMouseLeave={leaveNode}
              >
                <span className="orbital-node group">
                  <span className="orbital-node__icon">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-white/85 transition-colors duration-200 group-hover:text-[#5DCAA5]"
                    />
                  </span>
                  <span className="orbital-node__label">{skill.title}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
