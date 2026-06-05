import type { Metadata } from "next";
import { BackLink } from "../components/BackLink";
import { OrbitalSkills } from "../components/OrbitalSkills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills, research methods, and certifications — visualized as an orbital system.",
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-16">
        <BackLink />

        <div className="mt-10">
          <div className="text-xs uppercase tracking-wider text-white/45">
            skills
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-medium tracking-tight">
            What I work with
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/65 leading-relaxed">
            Wet-lab techniques, field research methods, data analysis, and the
            certifications behind them — orbiting the work they all support.
            Hover a node to pause the rotation.
          </p>
        </div>
      </div>

      <section
        aria-label="Skills constellation"
        className="mt-12 h-[80vh] min-h-[560px] w-full"
      >
        <OrbitalSkills />
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-center text-xs text-white/55 sm:px-8 sm:py-16">
        © {new Date().getFullYear()} Adam Amac
      </footer>
    </main>
  );
}
