"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function MotionSection({
  children,
  index = 0,
  className = "",
}: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
