"use client";

import { motion } from "framer-motion";
import { OrbitalSkills } from "./OrbitalSkills";

export function PinnedOrbital() {
  return (
    <section
      aria-label="Skills"
      className="relative w-full md:h-[260vh]"
    >
      <div className="sticky top-0 h-[100svh] w-full md:h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full"
        >
          <OrbitalSkills />
        </motion.div>
      </div>
    </section>
  );
}
