import { Card } from "../Card";
import { activities } from "@/lib/resume";

interface ActivitiesCardProps {
  className?: string;
  index?: number;
  id?: string;
}

export function ActivitiesCard({
  className = "",
  index = 0,
  id,
}: ActivitiesCardProps) {
  return (
    <Card
      id={id}
      eyebrow="activities"
      title="Clubs & sports"
      className={className}
      index={index}
    >
      <ul className="flex flex-wrap gap-2">
        {activities.map((activity) => (
          <li
            key={activity}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
          >
            {activity}
          </li>
        ))}
      </ul>
    </Card>
  );
}
