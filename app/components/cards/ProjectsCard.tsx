import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "../Card";
import { projects, type Project } from "@/lib/resume";

interface ProjectsCardProps {
  className?: string;
  index?: number;
  id?: string;
}

const statusBadgeClass: Record<Project["status"], string> = {
  "in development":
    "bg-amber-400/10 text-amber-300 border-amber-400/20",
  shipped:
    "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  prototype:
    "bg-sky-400/10 text-sky-300 border-sky-400/20",
};

export function ProjectsCard({
  className = "",
  index = 0,
  id,
}: ProjectsCardProps) {
  return (
    <Card
      id={id}
      eyebrow="client work"
      title="Projects"
      className={className}
      index={index}
    >
      <ul className="flex flex-col">
        {projects.map((project, i) => {
          const dividerClass = i > 0 ? "border-t border-white/[0.06]" : "";

          const heading = (
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-white">
                {project.title}
              </div>
              <div className="mt-0.5 text-xs text-white/55">
                {project.client}
              </div>
            </div>
          );

          const meta = (
            <div className="flex shrink-0 flex-col items-end gap-1.5">
              <span
                className={
                  "rounded-full border px-2 py-0.5 text-[10px] " +
                  statusBadgeClass[project.status]
                }
              >
                {project.status}
              </span>
              <span className="text-[11px] text-white/45">
                {project.dateRange}
              </span>
            </div>
          );

          const summary = (
            <div className="mt-2 text-xs text-white/70">{project.summary}</div>
          );

          if (project.href) {
            return (
              <li key={project.title} className={dividerClass}>
                <Link
                  href={project.href}
                  className="group block -mx-2 rounded-lg border border-transparent px-2 py-3 transition-colors duration-200 hover:border-emerald-400/30 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    {heading}
                    <div className="flex items-start gap-2">
                      {meta}
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-all duration-200 group-hover:text-white/80 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  {summary}
                </Link>
              </li>
            );
          }

          return (
            <li key={project.title} className={"py-3 " + dividerClass}>
              <div className="flex items-start justify-between gap-3">
                {heading}
                {meta}
              </div>
              {summary}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
