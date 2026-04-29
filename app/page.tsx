import { Nav } from "./components/Nav";
import { HeroCard } from "./components/cards/HeroCard";
import { CurrentlyWorkingOnCard } from "./components/cards/CurrentlyWorkingOnCard";
import { ResearchCard } from "./components/cards/ResearchCard";
import { WorkCard } from "./components/cards/WorkCard";
import { EducationCard } from "./components/cards/EducationCard";
import { SkillsCard } from "./components/cards/SkillsCard";
import { LeadershipCard } from "./components/cards/LeadershipCard";
import { ContactCard } from "./components/cards/ContactCard";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:[grid-auto-rows:minmax(90px,auto)]">
          <HeroCard className="md:col-span-3 md:row-span-3" index={0} />
          <CurrentlyWorkingOnCard
            className="md:col-span-3 md:row-span-3"
            index={1}
          />
          <ResearchCard className="md:col-span-2 md:row-span-2" index={2} />
          <WorkCard className="md:col-span-4 md:row-span-2" index={3} />
          <EducationCard className="md:col-span-3 md:row-span-2" index={4} />
          <SkillsCard className="md:col-span-3 md:row-span-2" index={5} />
          <LeadershipCard className="md:col-span-4 md:row-span-3" index={6} />
          <ContactCard className="md:col-span-2 md:row-span-3" index={7} />
        </div>
        <footer className="mt-16 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Adam Amac
        </footer>
      </main>
    </>
  );
}
