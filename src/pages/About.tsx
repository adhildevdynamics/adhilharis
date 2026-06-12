import { Section01Intro } from '../components/about/Section01Intro';
import { Section02Snapshot } from '../components/about/Section02Snapshot';
import { Section03WhatIDo } from '../components/about/Section03WhatIDo';
import { AboutProjects } from '../components/about/AboutProjects';
import { AboutExperience } from '../components/about/AboutExperience';
import { Section06TechStack } from '../components/about/Section06TechStack';
import { Section07Focus } from '../components/about/Section07Focus';
import { Section08Closing } from '../components/about/Section08Closing';

export const About = () => {
  return (
    <main className="relative z-10 flex flex-col w-full bg-white min-h-screen text-gray-900 pt-20">
      <Section01Intro />
      <Section02Snapshot />
      <Section03WhatIDo />
      <AboutProjects />
      <AboutExperience />
      <Section06TechStack />
      <Section07Focus />
      <Section08Closing />
    </main>
  );
};
