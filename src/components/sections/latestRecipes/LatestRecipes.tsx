import React from 'react';
import { TitleSection } from '@/components/ui';
import { recipes } from '@/data';
import { LoadMoreBtn, RecipesCardsList } from '@/components/elements';

const LatestRecipes: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="Latest Recipes" />
        <RecipesCardsList cards={recipes} />
        <LoadMoreBtn />
      </div>
    </section>
  );
};

export default LatestRecipes;
