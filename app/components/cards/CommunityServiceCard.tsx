import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "../Card";
import { communityService, totalCommunityServiceHours } from "@/lib/resume";

interface CommunityServiceCardProps {
  className?: string;
  index?: number;
  id?: string;
}

export function CommunityServiceCard({
  className = "",
  index = 0,
  id,
}: CommunityServiceCardProps) {
  return (
    <Card
      id={id}
      eyebrow="community service"
      className={className}
      index={index}
    >
      <div className="mb-5">
        <div className="bg-gradient-to-r from-[#5DCAA5] via-[#85B7EB] to-[#AFA9EC] bg-clip-text text-4xl font-medium tracking-tight text-transparent">
          {totalCommunityServiceHours}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wider text-white/45">
          hours of service
        </div>
      </div>

      <ul className="flex flex-col">
        {communityService.map((item, i) => {
          const dividerClass = i > 0 ? "border-t border-white/[0.06]" : "";

          const content = (
            <>
              <div className="min-w-0">
                <div className="text-sm font-medium text-white">
                  {item.title}
                </div>
                <div className="mt-0.5 text-xs text-white/45">
                  {item.organization} · {item.dateRange}
                </div>
                <div className="mt-1 text-xs text-white/65">{item.summary}</div>
              </div>
            </>
          );

          if (item.href) {
            return (
              <li key={item.title} className={dividerClass}>
                <Link
                  href={item.href}
                  className="group flex cursor-pointer items-start justify-between gap-3 -mx-2 rounded-lg border border-transparent px-2 py-3 transition-colors duration-200 hover:border-emerald-400/30 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                >
                  {content}
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
              {content}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
