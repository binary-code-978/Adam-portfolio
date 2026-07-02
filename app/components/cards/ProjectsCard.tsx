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
  live: "bg-[#5DCAA5]/10 text-[#5DCAA5] border-[#5DCAA5]/30",
  "in development": "bg-amber-400/10 text-amber-300 border-amber-400/20",
};

function withArrow(label: string): string {
  return label.trimEnd().endsWith("→") ? label : `${label} →`;
}

const rowClass =
  "group block -mx-2 rounded-lg border border-[#5DCAA5]/15 px-2 py-3 " +
  "transition-colors duration-200 hover:border-[#5DCAA5]/40 hover:bg-white/[0.03] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5]/50";

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

          const content = (
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-white">
                    {project.title}
                  </div>
                  <div className="mt-0.5 text-xs text-white/55">
                    {project.subtitle}
                  </div>
                  <div className="mt-1 text-xs text-white/65">
                    {project.description}
                  </div>
                  <div className="mt-2 text-[11px] font-medium text-[#5DCAA5]/80 transition-colors duration-200 group-hover:text-[#5DCAA5]">
                    {withArrow(project.ctaLabel)}
                  </div>
                </div>

                <div className="flex shrink-0 items-start gap-2">
                  <div className="flex flex-col items-end gap-1.5">
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
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/65 transition-all duration-200 group-hover:text-[#5DCAA5] group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          );

          return (
            <li key={project.title} className={dividerClass}>
              {project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                >
                  {content}
                </a>
              ) : (
                <Link href={project.href} className={rowClass}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
