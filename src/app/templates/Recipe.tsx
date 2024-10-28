import React from 'react';
import { Helmet } from 'react-helmet';
import { AlsoLike, MailingList, RecipeContent } from '@/components/sections';
import { EUrls, FRONT_URL } from '@/utils';

const RecipePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Recipe | TasteBite</title>
        <meta
          name="description"
          content="Explore this delicious recipe, complete with ingredients, instructions, and tips for perfecting your dish. Enjoy cooking!"
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.RECIPE}`} />
      </Helmet>
      <main>
        <RecipeContent />
        <AlsoLike />
        <MailingList />
      </main>
    </>
  );
};

export default RecipePage;
