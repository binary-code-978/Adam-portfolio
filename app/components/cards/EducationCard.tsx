import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface EducationCardProps {
  className?: string;
  index?: number;
}

export function EducationCard({ className = "", index = 0 }: EducationCardProps) {
  return (
    <Card eyebrow="education" className={className} index={index}>
      <ul className="flex flex-col gap-4">
        {resume.education.map((edu) => (
          <li key={edu.school}>
            <div className="text-[15px] font-medium tracking-[-0.01em] text-white">
              {edu.school}
            </div>
            <div className="mt-1 text-xs text-white/50">
              {edu.start} – {edu.end} · {edu.location}
            </div>
            {edu.credential ? (
              <div className="mt-1 text-xs text-white/60">{edu.credential}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </Card>
  );
}
