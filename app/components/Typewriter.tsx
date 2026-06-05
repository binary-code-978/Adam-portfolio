"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

type Phase = "typing" | "holding" | "deleting" | "pausing";

const TYPE_SPEED_MS = 70;
const DELETE_SPEED_MS = 40;
const HOLD_MS = 1600;
const PAUSE_MS = 400;

export function Typewriter({ phrases, className = "" }: TypewriterProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || phrases.length === 0) return;

    const current = phrases[phraseIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < current.length) {
        timeoutId = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timeoutId = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else if (phase === "deleting") {
      if (charCount > 0) {
        timeoutId = setTimeout(
          () => setCharCount((c) => c - 1),
          DELETE_SPEED_MS
        );
      } else {
        timeoutId = setTimeout(() => setPhase("pausing"), 0);
      }
    } else {
      timeoutId = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }, PAUSE_MS);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, charCount, phraseIndex, phrases, reducedMotion]);

  if (phrases.length === 0) return null;

  if (reducedMotion) {
    return <span className={className}>{phrases[0]}</span>;
  }

  const visible = phrases[phraseIndex].slice(0, charCount);

  return (
    <>
      <span className={className}>{visible}</span>
      <span
        aria-hidden="true"
        className="typewriter-cursor ml-[2px] inline-block h-[0.95em] w-[3px] -mb-[0.08em] translate-y-[0.1em] bg-[#85B7EB] align-baseline"
      />
    </>
  );
}
