import React from 'react';
import { AboutMain, Operating, SimpleRecipes, TalentTeam } from '@/components/sections';

const AboutPage: React.FC = () => {
  return (
    <main>
      <AboutMain />
      <SimpleRecipes />
      <TalentTeam />
      <Operating />
    </main>
  );
};

export default AboutPage;
