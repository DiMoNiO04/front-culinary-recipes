import { AlsoLike, MailingList, RecipeContent } from '@/components/sections';
import React from 'react';

const Recipe: React.FC = () => {
  return (
    <main>
      <RecipeContent />
      <AlsoLike />
      <MailingList />
    </main>
  );
};

export default Recipe;
