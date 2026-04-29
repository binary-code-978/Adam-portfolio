import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "../Card";
import { achievements } from "@/lib/resume";

interface AchievementsCardProps {
  className?: string;
  index?: number;
  id?: string;
}

export function AchievementsCard({
  className = "",
  index = 0,
  id,
}: AchievementsCardProps) {
  return (
    <Card
      id={id}
      eyebrow="achievements"
      title="Honors & recognition"
      className={className}
      index={index}
    >
      <ul className="flex flex-col">
        {achievements.map((item, i) => {
          const dividerClass = i > 0 ? "border-t border-white/[0.06]" : "";
          const meta = (
            <div className="mt-0.5 text-xs text-white/55">
              {item.date}
              {item.issuer ? ` · ${item.issuer}` : ""}
            </div>
          );

          if (item.href) {
            return (
              <li key={item.title} className={dividerClass}>
                <Link
                  href={item.href}
                  className="group flex cursor-pointer items-start justify-between gap-3 -mx-2 rounded-lg px-2 py-3 transition-colors duration-200 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                    {meta}
                  </div>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-all duration-200 group-hover:text-white/80 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          }

          return (
            <li key={item.title} className={"py-3 " + dividerClass}>
              <div className="text-sm font-medium text-white">{item.title}</div>
              {meta}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
