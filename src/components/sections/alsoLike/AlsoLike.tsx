import React from 'react';
import { TitleSection } from '@/components/ui';
import { RecipesCardsList } from '@/components/elements';
import { recipes } from '@/data';

const AlsoLike: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="You might also like" />
        <RecipesCardsList cards={recipes.slice(0, 8)} />
      </div>
    </section>
  );
};

export default AlsoLike;
