import { Card } from "../Card";
import { orbitalSkills } from "@/lib/resume";

interface SkillsCardProps {
  className?: string;
  index?: number;
  id?: string;
}

const PREVIEW_COUNT = 6;

export function SkillsCard({ className = "", index = 0, id }: SkillsCardProps) {
  const visible = orbitalSkills.slice(0, PREVIEW_COUNT);
  const overflow = orbitalSkills.length - visible.length;

  return (
    <Card
      id={id}
      eyebrow="skills"
      title="Technical skills"
      className={className}
      index={index}
      href="/skills"
      interactive
      arrow
      ariaLabel="See full skills"
    >
      <ul className="flex flex-wrap gap-2">
        {visible.map((skill) => (
          <li
            key={skill.id}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
          >
            {skill.title}
          </li>
        ))}
        {overflow > 0 ? (
          <li className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/55">
            +{overflow} more
          </li>
        ) : null}
      </ul>
    </Card>
  );
}
