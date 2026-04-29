import { Card } from "../Card";
import { resume } from "@/lib/resume";

interface ContactCardProps {
  className?: string;
  index?: number;
}

export function ContactCard({ className = "", index = 0 }: ContactCardProps) {
  return (
    <Card eyebrow="let's connect" className={className} index={index}>
      <ul className="flex flex-col gap-3">
        <li>
          <div className="text-xs text-white/55">email</div>
          <a
            href={`mailto:${resume.contact.email}`}
            className="text-sm text-white/85 hover:text-white"
          >
            {resume.contact.email}
          </a>
        </li>
        <li>
          <div className="text-xs text-white/55">phone</div>
          <a
            href={`tel:${resume.contact.phone}`}
            className="text-sm text-white/85 hover:text-white"
          >
            {resume.contact.phone}
          </a>
        </li>
      </ul>
    </Card>
  );
}
