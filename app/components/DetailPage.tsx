import { BackLink } from "./BackLink";
import { MotionSection } from "./MotionSection";

export interface DetailSection {
  heading: string;
  body?: string;
  bullets?: string[];
  hidden?: boolean;
}

export interface DetailPageData {
  slug: string;
  title: string;
  subtitle: string;
  dateRange: string;
  location: string;
  advisor?: string;
  award?: string;
  overview: string;
  projectTitle?: string;
  sections: ReadonlyArray<DetailSection>;
  techniques?: ReadonlyArray<string>;
  pullQuote?: string;
}

interface DetailPageProps {
  data: DetailPageData;
}

const headingClass = "text-xl font-medium tracking-tight mb-3 mt-12";
const bodyClass = "text-base text-white/70 leading-relaxed max-w-2xl";

export function DetailPage({ data }: DetailPageProps) {
  const metaParts = [data.dateRange, data.location];
  if (data.advisor) metaParts.push(data.advisor);

  const visibleSections = data.sections.filter((s) => !s.hidden);

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <BackLink />

      <MotionSection index={0} className="mt-10">
        <div className="text-xs uppercase tracking-wider text-white/45">
          {data.subtitle}
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-medium tracking-tight">
          {data.title}
        </h1>
        <div className="mt-3 text-sm text-white/55">{metaParts.join(" · ")}</div>
        {data.award ? (
          <div className="mt-2 text-sm text-amber-300/80">{data.award}</div>
        ) : null}
        {data.projectTitle ? (
          <div className="mt-6 text-base text-white/85">
            <span className="text-white/45">Project · </span>
            {data.projectTitle}
          </div>
        ) : null}
      </MotionSection>

      <MotionSection index={1}>
        <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl">
          {data.overview}
        </p>
      </MotionSection>

      {visibleSections.map((section, i) => (
        <MotionSection key={section.heading} index={2 + i}>
          <h2 className={headingClass}>{section.heading}</h2>
          {section.body ? <p className={bodyClass}>{section.body}</p> : null}
          {section.bullets ? (
            <ul
              className={"max-w-2xl space-y-2 " + (section.body ? "mt-4" : "")}
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
      ))}

      {data.pullQuote ? (
        <MotionSection index={2 + visibleSections.length}>
          <blockquote className="mt-12 max-w-2xl border-l-2 border-[#5DCAA5] bg-white/[0.03] px-6 py-5 font-serif italic text-lg text-white/85 leading-relaxed">
            {data.pullQuote}
          </blockquote>
        </MotionSection>
      ) : null}

      {data.techniques && data.techniques.length > 0 ? (
        <MotionSection
          index={2 + visibleSections.length + (data.pullQuote ? 1 : 0)}
        >
          <h2 className={headingClass}>Techniques used</h2>
          <ul className="flex flex-wrap gap-2 max-w-2xl">
            {data.techniques.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </MotionSection>
      ) : null}
    </main>
  );
}
