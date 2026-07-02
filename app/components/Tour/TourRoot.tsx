"use client";

import { useEffect, useState } from "react";
import { TourOverlay } from "./TourOverlay";
import { TourPill } from "./TourPill";

const STORAGE_KEY = "tour_seen";

export function TourRoot() {
  // `open` defaults to false so SSR and the first client render agree (no
  // hydration mismatch). First-time visitors get the intro after the mount
  // effect reads localStorage; returning visitors just see the pill.
  const [open, setOpen] = useState(false);
  const [launchKey, setLaunchKey] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      seen = false;
    }
    if (!seen) {
      setLaunchKey((k) => k + 1);
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
    setOpen(false);
  };

  const handleLaunch = () => {
    setLaunchKey((k) => k + 1);
    setOpen(true);
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
