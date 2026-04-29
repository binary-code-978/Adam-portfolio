import type { InternshipDetail } from "@/lib/resume";
import { BackLink } from "./BackLink";
import { MotionSection } from "./MotionSection";

interface InternshipDetailPageProps {
  detail: InternshipDetail;
}

const headingClass = "text-xl font-medium tracking-tight mb-3 mt-12";
const bodyClass = "text-base text-white/70 leading-relaxed max-w-2xl";

export function InternshipDetailPage({ detail }: InternshipDetailPageProps) {
  const metaParts = [detail.dateRange, detail.location];
  if (detail.advisor) metaParts.push(detail.advisor);

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <BackLink />

      <MotionSection index={0} className="mt-10">
        <div className="text-xs uppercase tracking-wider text-white/45">
          {detail.subtitle}
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-medium tracking-tight">
          {detail.title}
        </h1>
        <div className="mt-3 text-sm text-white/55">
          {metaParts.join(" · ")}
        </div>
      </MotionSection>

      <MotionSection index={1}>
        <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl">
          {detail.overview}
        </p>
      </MotionSection>

      {detail.sections.map((section, i) => {
        const isPlaceholder = section.body?.trimStart().startsWith("[PLACEHOLDER");
        return (
          <MotionSection key={section.heading} index={2 + i}>
            <h2 className={headingClass}>{section.heading}</h2>
            {section.body ? (
              isPlaceholder ? (
                <div className="max-w-2xl rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-sm text-amber-200/90 leading-relaxed">
                  <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-amber-300/80">
                    Draft — Adam to fill in
                  </div>
                  <p>{section.body}</p>
                </div>
              ) : (
                <p className={bodyClass}>{section.body}</p>
              )
            ) : null}
            {section.bullets ? (
              <ul
                className={
                  "max-w-2xl space-y-2 " + (section.body ? "mt-4" : "")
                }
              >
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-base text-white/70 leading-relaxed"
                  >
                    <span className="text-white/30 select-none">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </MotionSection>
        );
      })}

      <MotionSection index={2 + detail.sections.length}>
        <h2 className={headingClass}>Techniques used</h2>
        <ul className="flex flex-wrap gap-2 max-w-2xl">
          {detail.techniques.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </MotionSection>
    </main>
  );
}
