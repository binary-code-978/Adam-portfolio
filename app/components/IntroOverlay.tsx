"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "introSeen";

function readSeen(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeSeen() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (!readSeen()) setVisible(true);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const dismiss = useCallback(() => {
    writeSeen();
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previouslyFocused =
      typeof document !== "undefined"
        ? (document.activeElement as HTMLElement | null)
        : null;

    buttonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [visible, dismiss]);

  if (!mounted) return null;

  const fadeDuration = reducedMotion ? 0.1 : 0.7;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro-overlay"
          role="dialog"
          aria-label="Welcome"
          aria-modal="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050506] px-6 text-center"
        >
          <h2 className="bg-gradient-to-r from-[#5DCAA5] via-[#85B7EB] to-[#AFA9EC] bg-clip-text pb-2 text-3xl font-medium leading-[1.15] tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Ready to see greatness?
          </h2>

          <button
            ref={buttonRef}
            type="button"
            onClick={dismiss}
            className="intro-continue group relative mt-12 inline-flex items-center justify-center overflow-hidden px-10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:text-[#5DCAA5] active:scale-[0.96]"
          >
            <span
              aria-hidden="true"
              className="intro-continue__stripes pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="intro-continue__corner intro-continue__corner--tl"
            />
            <span
              aria-hidden="true"
              className="intro-continue__corner intro-continue__corner--tr"
            />
            <span
              aria-hidden="true"
              className="intro-continue__corner intro-continue__corner--bl"
            />
            <span
              aria-hidden="true"
              className="intro-continue__corner intro-continue__corner--br"
            />
            <span className="relative">Continue</span>
          </button>

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/35">
            click to enter
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
