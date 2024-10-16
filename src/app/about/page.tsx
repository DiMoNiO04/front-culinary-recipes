import { AboutMain, Operating, SimpleRecipes, TalentTeam } from '@/components/sections';
import React from 'react';

const About: React.FC = () => {
  return (
    <main>
      <AboutMain />
      <SimpleRecipes />
      <TalentTeam />
      <Operating />
    </main>
  );
};

export default About;
