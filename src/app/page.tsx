"use client";
import ReachOutSection from "@/components/contact";
import FooterSection from "@/components/footer";
import Hero from "@/components/hero";

import ParralaxSection from "@/components/parralax-scroll";
import ProjectsSection from "@/components/project";
import SkillsShowcase from "@/components/skills-section";
import TechStackSection from "@/components/stack";
import Word from "@/components/word";
import WorkSection from "@/components/experience";
import ExperienceSection from "@/components/experience";
import { Chrome, Figma, Slack } from "lucide-react";
import React, { useRef } from "react";

const content =
  "As a software developer with expertise in frontend and mobile development, I have been building applications using React, Flutter, Next.js, and Tailwind CSS for the past two years. I have a strong foundation in JavaScript and am currently expanding my skills with TypeScript in React Native (Expo)..";

const Page = () => {
  return (
    <section className="bg-[#0a0a0a] text-[#ededed] min-h-screen scroll-smooth">
      <Hero />

      <ParralaxSection />

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="contact">
        <ReachOutSection />
      </div>

      <FooterSection />
    </section>
  );
};

export default Page;
