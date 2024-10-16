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
import { Auth } from '@/components/layouts';

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
      <Auth />
    </main>
  );
};

export default Home;
