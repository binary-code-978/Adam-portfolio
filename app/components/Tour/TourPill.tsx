"use client";

interface TourPillProps {
  onLaunch: () => void;
  hidden?: boolean;
}

export function TourPill({ onLaunch, hidden = false }: TourPillProps) {
  return (
    <button
      type="button"
      onClick={onLaunch}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 90,
        background: "rgba(23,23,26,0.85)",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 999,
        padding: "8px 16px",
        fontSize: 12,
        color: "rgba(255,255,255,0.8)",
        cursor: "pointer",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 200ms ease-out",
      }}
    >
      Take the tour ↗
    </button>
  );
}
