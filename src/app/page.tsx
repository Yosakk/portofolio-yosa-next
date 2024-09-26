"use client";

import * as React from 'react';
import WorkExperience from '@/section/home/Work-Experience.section';
import HeroSection from '@/section/home/Hero.section';
import AboutSection from '@/section/home/About.section';
import SkillSection from '@/section/home/Skill.section';

export default function HomePage() {
  return (
    <main className='relative z-0 bg-[#090f1d]'>
      <div className="absolute inset-0 z-10 bg-[url('/images/Frame.png')] object-cover min-h-screen bg-cover bg-center bg-blend-darken"></div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkExperience />
    </main>
  );
}
