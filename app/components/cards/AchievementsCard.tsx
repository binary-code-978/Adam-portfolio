import { Card } from "../Card";
import { achievements, type AchievementCategory } from "@/lib/resume";
import {
  SectionedList,
  type SectionedListGroup,
  type SectionedListItem,
} from "../SectionedList";

interface AchievementsCardProps {
  className?: string;
  index?: number;
  id?: string;
}

const groups: SectionedListGroup<AchievementCategory>[] = [
  { category: "award", label: "Awards", accentHex: "#FCD34D", icon: "★" },
  {
    category: "certification",
    label: "Certifications",
    accentHex: "#5DCAA5",
    icon: "✓",
  },
  {
    category: "course",
    label: "Courses & Programs",
    accentHex: "#85B7EB",
    icon: "◐",
  },
];

const filters: ReadonlyArray<{
  value: AchievementCategory | "all";
  label: string;
}> = [
  { value: "all", label: "All" },
  { value: "award", label: "Awards" },
  { value: "certification", label: "Certifications" },
  { value: "course", label: "Courses" },
];

export function AchievementsCard({
  className = "",
  index = 0,
  id,
}: AchievementsCardProps) {
  const items: SectionedListItem<AchievementCategory>[] = achievements.map(
    (achievement) => ({
      id: achievement.title,
      title: achievement.title,
      detail: `${achievement.date}${
        achievement.issuer ? ` · ${achievement.issuer}` : ""
      }`,
      category: achievement.category,
      href: achievement.href,
      ctaLabel: achievement.href ? "Read about the project →" : undefined,
    })
  );

  return (
    <Card
      id={id}
      eyebrow="achievements"
      title="Honors & recognition"
      className={className}
      index={index}
    >
      <SectionedList
        items={items}
        groups={groups}
        filters={filters}
        defaultFilter="all"
      />
    </Card>
  );
}
