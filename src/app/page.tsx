import React from 'react';
import {
  CurratedCollection,
  LatestRecipes,
  MailingList,
  PopularCategories,
  ShareYourRecipe,
  Slider,
  SuperDelicious,
} from '@/components/sections';

const Home: React.FC = () => {
  return (
    <main>
      <Slider />
      <PopularCategories />
      <SuperDelicious />
      <ShareYourRecipe />
      <CurratedCollection />
      <LatestRecipes />
      <MailingList />
    </main>
  );
};

export default Home;
