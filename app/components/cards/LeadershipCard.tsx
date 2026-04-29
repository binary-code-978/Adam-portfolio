import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface LeadershipCardProps {
  className?: string;
  index?: number;
}

const leadershipKeywords = ["Captain", "President", "Black Belt"];

export function LeadershipCard({ className = "", index = 0 }: LeadershipCardProps) {
  const items = resume.awards.filter((award) =>
    leadershipKeywords.some((kw) => award.title.includes(kw))
  );

  return (
    <Card eyebrow="leadership" className={className} index={index}>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.title}>
            <div className="text-sm text-white/85">{item.title}</div>
            <div className="text-xs text-white/55">{item.date}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
