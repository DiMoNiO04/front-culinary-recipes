import React from 'react';
import { AlsoLike, MailingList, RecipeContent } from '@/components/sections';

const RecipePage: React.FC = () => {
  return (
    <main>
      <RecipeContent />
      <AlsoLike />
      <MailingList />
    </main>
  );
};

export default RecipePage;
