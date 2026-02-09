import BackgroundDecor from "./components/BackgroundDecor";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import { projects, experiences, links } from "./data/portfolio";
import { sora } from "./fonts";

export default function Home() {
  return (
    <div className={`${sora.className} min-h-screen relative overflow-hidden text-[color:var(--foreground)]`}>
      <BackgroundDecor />

      <div className="relative">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20">
          <HeroSection />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <ContactSection links={links} />
        </main>

      </div>
    </div>
  );
}
