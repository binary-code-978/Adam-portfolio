import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface ResearchCardProps {
  className?: string;
  index?: number;
  id?: string;
}

export function ResearchCard({ className = "", index = 0, id }: ResearchCardProps) {
  const research = resume.work.find((w) =>
    w.role.includes("Field Research")
  );

  if (!research) return null;

  return (
    <Card
      id={id}
      eyebrow="summer 2025"
      title="UMass field research"
      className={className}
      arrow
      index={index}
      href="/internships/sheriff-lab"
      ariaLabel="Read about UMass field research with the Sheriff Lab"
    >
      <p>{research.description}</p>
      <p className="mt-3 text-xs text-white/55">
        {research.organization} · {research.location}
      </p>
    </Card>
  );
}
