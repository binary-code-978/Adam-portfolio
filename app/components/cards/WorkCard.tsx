import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface WorkCardProps {
  className?: string;
  index?: number;
}

export function WorkCard({ className = "", index = 0 }: WorkCardProps) {
  const mlsc = resume.work.find((w) => w.role.includes("MLSC"));

  if (!mlsc) return null;

  return (
    <Card
      eyebrow="summer 2024"
      title="MLSC apprenticeship"
      className={className}
      arrow
      index={index}
      href="/internships/mlsc"
      ariaLabel="Read about the MLSC apprenticeship"
    >
      <p>{mlsc.description}</p>
      <p className="mt-3 text-xs text-white/55">
        {mlsc.organization} · {mlsc.location} · {mlsc.start} – {mlsc.end}
      </p>
    </Card>
  );
}
