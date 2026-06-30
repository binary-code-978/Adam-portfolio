"use client";

import { motion } from "framer-motion";
import {
  currentlyWorkingOn,
  type CurrentProject,
  type CurrentProjectCategory,
} from "@/lib/resume";
import {
  SectionedList,
  type SectionedListGroup,
  type SectionedListItem,
} from "../SectionedList";

interface CurrentlyWorkingOnCardProps {
  className?: string;
  index?: number;
}

function StatusPill({ status }: { status: CurrentProject["status"] }) {
  if (status === "active") return null;

  if (status === "completing soon") {
    return (
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
        completing soon
      </span>
    );
  }

  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/20">
      upcoming
    </span>
  );
}

const groups: SectionedListGroup<CurrentProjectCategory>[] = [
  { category: "research", label: "Research", accentHex: "#85B7EB", icon: "◆" },
  { category: "program", label: "Programs", accentHex: "#5DCAA5", icon: "▲" },
  { category: "community", label: "Community", accentHex: "#AFA9EC", icon: "●" },
  {
    category: "personal",
    label: "Personal",
    accentHex: "rgba(255,255,255,0.40)",
    icon: "○",
  },
];

const filters: ReadonlyArray<{
  value: CurrentProjectCategory | "all";
  label: string;
}> = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "program", label: "Programs" },
  { value: "personal", label: "Personal" },
];

export function CurrentlyWorkingOnCard({
  className = "",
  index = 0,
}: CurrentlyWorkingOnCardProps) {
  const items: SectionedListItem<CurrentProjectCategory>[] =
    currentlyWorkingOn.map((project) => ({
      id: project.title,
      title: project.title,
      detail: project.detail,
      category: project.category,
      rightSlot:
        project.status !== "active" ? (
          <StatusPill status={project.status} />
        ) : undefined,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className={
        "relative flex min-w-0 flex-col rounded-2xl bg-[#131316] p-6 " +
        "border-[0.5px] border-white/[0.08] hover:border-white/20 " +
        "transition-colors duration-300 " +
        className
      }
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className="animate-pulse bg-emerald-400 w-1.5 h-1.5 rounded-full inline-block"
          aria-hidden="true"
        />
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
          currently working on
        </span>
      </div>

      <SectionedList
        items={items}
        groups={groups}
        filters={filters}
        defaultFilter="all"
      />
    </motion.div>
  );
}
