import { Card } from "../Card";
import { leadershipRoles } from "@/lib/resume";

interface LeadershipCardProps {
  className?: string;
  index?: number;
  id?: string;
}

export function LeadershipCard({
  className = "",
  index = 0,
  id,
}: LeadershipCardProps) {
  return (
    <Card id={id} eyebrow="leadership" className={className} index={index}>
      <ul className="flex flex-col">
        {leadershipRoles.map((role, i) => (
          <li
            key={role.title}
            className={
              "py-3 " + (i > 0 ? "border-t border-white/[0.06]" : "")
            }
          >
            <div className="text-sm font-medium text-white">{role.title}</div>
            <div className="mt-0.5 text-xs text-white/55">
              {role.date}
              {role.organization ? ` · ${role.organization}` : ""}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
