"use client";

import { useState, useSyncExternalStore } from "react";
import { TourOverlay } from "./TourOverlay";
import { TourPill } from "./TourPill";

const STORAGE_KEY = "tour_seen";

// The server (and the first client render) reports "seen" so nothing pops in
// before hydration. After hydration the real localStorage value is read; a
// first-time visitor's `seen` flips to false, opening the intro. This is the
// accepted brief no-intro flash on first paint vs. a hydration mismatch.
function useTourSeen(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return localStorage.getItem(STORAGE_KEY) === "true";
      } catch {
        return true;
      }
    },
    () => true
  );
}

export function TourRoot() {
  const seen = useTourSeen();
  // null → follow first-visit auto behaviour; true/false → user-driven this
  // session (relaunch from pill, or closed the tour).
  const [manualOpen, setManualOpen] = useState<boolean | null>(null);
  const [launchKey, setLaunchKey] = useState(0);

  const open = manualOpen ?? !seen;

  const handleClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
    setManualOpen(false);
  };

  const handleLaunch = () => {
    setLaunchKey((k) => k + 1);
    setManualOpen(true);
  };

  return (
    <>
      {open ? (
        <TourOverlay
          key={launchKey}
          initialPhase="intro"
          onClose={handleClose}
        />
      ) : null}
      <TourPill onLaunch={handleLaunch} hidden={open} />
    </>
  );
}
