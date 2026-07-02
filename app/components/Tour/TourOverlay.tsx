"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { tourSteps } from "./tourSteps";

type TourState =
  | { phase: "intro" }
  | { phase: "step"; index: number }
  | { phase: "closing" }
  | { phase: "closed" };

interface TourOverlayProps {
  initialPhase: "intro" | "closed";
  onClose: () => void;
}

const TEAL = "#5DCAA5";
const DARK = "#0a0a0c";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export function TourOverlay({ initialPhase, onClose }: TourOverlayProps) {
  const [state, setState] = useState<TourState>(() =>
    initialPhase === "intro" ? { phase: "intro" } : { phase: "closed" }
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeStep = state.phase === "step" ? state.index : -1;

  // Escape exits the tour from any phase.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Spotlight + blur + auto-scroll for the active step. All classes are added
  // on enter and removed on cleanup, so nothing lingers between steps or after
  // the tour closes.
  useEffect(() => {
    if (activeStep < 0) return;
    const step = tourSteps[activeStep];
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(step.targetSelector)
    );
    document.body.classList.add("tour-active");
    els.forEach((el) => el.classList.add("tour-spotlight"));
    if (els[0]) {
      els[0].scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
    }
    return () => {
      document.body.classList.remove("tour-active");
      els.forEach((el) => el.classList.remove("tour-spotlight"));
    };
  }, [activeStep, prefersReducedMotion]);

  if (state.phase === "closed") return null;

  if (state.phase === "intro") {
    return (
      <IntroCloseScreen
        eyebrow="welcome"
        heading="Hi, I'm Adam."
        body="This site is a bento grid — each box is a piece of me. You'll find what I'm working on now, internships, achievements, projects I've shipped, and the community work that keeps me grounded. Some boxes are clickable for deeper reads."
        primaryLabel="Take the tour →"
        onPrimary={() => setState({ phase: "step", index: 0 })}
        secondaryLabel="Skip tour"
        onSecondary={onClose}
        prefersReducedMotion={prefersReducedMotion}
      />
    );
  }

  if (state.phase === "closing") {
    return (
      <IntroCloseScreen
        eyebrow="that's the tour"
        heading="Also worth exploring"
        body="The Latest strip up top for recent milestones, my interactive Skills page, Education, Leadership, Activities — clubs and sports, and Contact info at the bottom."
        primaryLabel="Close"
        onPrimary={onClose}
        prefersReducedMotion={prefersReducedMotion}
      />
    );
  }

  // step phase
  const index = state.index;
  const step = tourSteps[index];
  const isLast = index === tourSteps.length - 1;
  return (
    <CoachCard
      index={index}
      total={tourSteps.length}
      title={step.title}
      body={step.body}
      isLast={isLast}
      onBack={() =>
        setState((s) =>
          s.phase === "step" && s.index > 0
            ? { phase: "step", index: s.index - 1 }
            : s
        )
      }
      onNext={() =>
        isLast
          ? setState({ phase: "closing" })
          : setState({ phase: "step", index: index + 1 })
      }
      onClose={onClose}
    />
  );
}

/* ───────── Intro / closing full-screen dialog ───────── */

interface IntroCloseScreenProps {
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  prefersReducedMotion: boolean;
}

function IntroCloseScreen({
  eyebrow,
  heading,
  body,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
  prefersReducedMotion,
}: IntroCloseScreenProps) {
  const primaryRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingId = `tour-${eyebrow.replace(/\s+/g, "-")}-heading`;

  // Lock body scroll while the dimmed screen is up; focus the primary button.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primaryRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Simple focus trap between the buttons in this dialog.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
      "button"
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      onKeyDown={onKeyDown}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(10,10,12,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: prefersReducedMotion ? undefined : "tourFade 220ms ease-out",
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: 380,
          width: "100%",
          textAlign: "left",
        }}
      >
        <div
          style={{
            color: TEAL,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: 11,
            fontWeight: 500,
          }}
        >
          {eyebrow}
        </div>
        <h2
          id={headingId}
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "#fff",
            margin: "12px 0 0",
            lineHeight: 1.2,
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            margin: "12px 0 0",
          }}
        >
          {body}
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <button
            ref={primaryRef}
            type="button"
            onClick={onPrimary}
            style={{
              background: TEAL,
              color: DARK,
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            {primaryLabel}
          </button>
          {secondaryLabel && onSecondary ? (
            <button
              type="button"
              onClick={onSecondary}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 500,
                border: "0.5px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
              }}
            >
              {secondaryLabel}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ───────── Bottom-right coach card ───────── */

interface CoachCardProps {
  index: number;
  total: number;
  title: string;
  body: string;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
  onClose: () => void;
}

function CoachCard({
  index,
  total,
  title,
  body,
  isLast,
  onBack,
  onNext,
  onClose,
}: CoachCardProps) {
  const nextRef = useRef<HTMLButtonElement>(null);
  const titleId = "tour-coach-title";

  // Focus the primary action whenever the step changes.
  useEffect(() => {
    nextRef.current?.focus();
  }, [index]);

  return (
    <div
      className="tour-coach-card"
      role="dialog"
      aria-labelledby={titleId}
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 101,
        width: 280,
        background: "#17171a",
        border: "0.5px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: TEAL,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          Step {index + 1} of {total}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Exit tour"
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            fontSize: 16,
            lineHeight: 1,
            cursor: "pointer",
            padding: 0,
            minWidth: 32,
            minHeight: 32,
          }}
        >
          ✕
        </button>
      </div>
      <h3
        id={titleId}
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#fff",
          margin: "6px 0 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.5,
          margin: "6px 0 0",
        }}
      >
        {body}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 14,
        }}
      >
        <div style={{ display: "flex", gap: 4 }} aria-hidden="true">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              style={{
                width: 14,
                height: 2,
                borderRadius: 1,
                background: i === index ? TEAL : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {index > 0 ? (
            <button
              type="button"
              onClick={onBack}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.5)",
                fontSize: 11,
                cursor: "pointer",
                minHeight: 32,
                padding: "0 4px",
              }}
            >
              Back
            </button>
          ) : null}
          <button
            ref={nextRef}
            type="button"
            onClick={onNext}
            style={{
              background: "rgba(93,202,165,0.15)",
              color: TEAL,
              border: `0.5px solid ${TEAL}`,
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 11,
              cursor: "pointer",
              minHeight: 32,
            }}
          >
            {isLast ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
