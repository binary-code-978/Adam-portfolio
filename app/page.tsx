import { Nav } from "./components/Nav";
import { IntroOverlay } from "./components/IntroOverlay";
import { HeroCard } from "./components/cards/HeroCard";
import { CurrentlyWorkingOnCard } from "./components/cards/CurrentlyWorkingOnCard";
import { LatestStrip } from "./components/LatestStrip";
import { ResearchCard } from "./components/cards/ResearchCard";
import { WorkCard } from "./components/cards/WorkCard";
import { EducationCard } from "./components/cards/EducationCard";
import { AchievementsCard } from "./components/cards/AchievementsCard";
import { LeadershipCard } from "./components/cards/LeadershipCard";
import { OrbitalSkills } from "./components/OrbitalSkills";
import { ProjectsCard } from "./components/cards/ProjectsCard";
import { CommunityServiceCard } from "./components/cards/CommunityServiceCard";
import { ActivitiesCard } from "./components/cards/ActivitiesCard";
import { ContactCard } from "./components/cards/ContactCard";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:[grid-auto-rows:minmax(90px,auto)]">
            <HeroCard
              id="about"
              className="md:col-span-3 md:row-span-3"
              index={0}
            />
            <CurrentlyWorkingOnCard
              className="md:col-span-3 md:row-span-3"
              index={1}
            />
            <LatestStrip className="md:col-span-6 md:row-span-1" index={2} />
            <ResearchCard
              id="research"
              className="md:col-span-2 md:row-span-2"
              index={3}
            />
            <WorkCard
              id="work"
              className="md:col-span-4 md:row-span-2"
              index={4}
            />
            <AchievementsCard
              className="md:col-span-3 md:row-span-3"
              index={5}
            />
            <EducationCard
              className="md:col-span-3 md:row-span-3"
              index={6}
            />
            <LeadershipCard
              className="md:col-span-3 md:row-span-2"
              index={7}
            />
            <ProjectsCard className="md:col-span-3 md:row-span-2" index={8} />
          </div>
        </div>

        <section className="my-10 h-[80vh] w-full sm:my-16">
          <OrbitalSkills />
        </section>

        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:[grid-auto-rows:minmax(90px,auto)]">
            <CommunityServiceCard
              className="md:col-span-3 md:row-span-2"
              index={9}
            />
            <ActivitiesCard
              className="md:col-span-3 md:row-span-2"
              index={10}
            />
            <ContactCard
              id="contact"
              className="md:col-span-6 md:row-span-2"
              index={11}
            />
          </div>
          <footer className="mt-16 text-center text-xs text-white/55">
            © {new Date().getFullYear()} Adam Amac
          </footer>
        </div>
      </main>
    </>
  );
}
