import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface SkillsCardProps {
  className?: string;
  index?: number;
}

export function SkillsCard({ className = "", index = 0 }: SkillsCardProps) {
  return (
    <Card eyebrow="skills" className={className} index={index}>
      <ul className="flex flex-col gap-2">
        {resume.skills.map((skill) => (
          <li key={skill} className="text-sm text-white/80">
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}
