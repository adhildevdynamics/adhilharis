import { HeroSection } from '../components/ui/HeroSection';
import { IdentityReveal } from '../components/ui/IdentityReveal';
import { AboutStory } from '../components/ui/AboutStory';
import { CodeToProduct } from '../components/ui/CodeToProduct';
import { Experience } from '../components/ui/Experience';
import { Philosophy } from '../components/ui/Philosophy';
import { HorizontalShowcase } from '../components/ui/HorizontalShowcase';
import { Education } from '../components/ui/Education';
import { AiWorkflow } from '../components/ui/AiWorkflow';
import { ContactEnding } from '../components/ui/ContactEnding';

export const Home = () => {
  return (
    <main className="relative z-10 flex flex-col w-full">
      <HeroSection />
      <IdentityReveal />
      <AboutStory />
      <CodeToProduct />
      <HorizontalShowcase />
      <Experience />
      <Philosophy />
      <Education />
      <AiWorkflow />
      <ContactEnding />
    </main>
  );
};
