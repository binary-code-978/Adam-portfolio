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
        {achievements.map((item, i) => (
          <li
            key={item.title}
            className={
              "py-3 " + (i > 0 ? "border-t border-white/[0.06]" : "")
            }
          >
            <div className="text-sm font-medium text-white">{item.title}</div>
            <div className="mt-0.5 text-xs text-white/55">
              {item.date}
              {item.issuer ? ` · ${item.issuer}` : ""}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
