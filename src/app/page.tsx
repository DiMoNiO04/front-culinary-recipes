import {
  CurratedCollection,
  LatestRecipes,
  MailingList,
  PopularCategories,
  ShareYourRecipe,
  Slider,
  SuperDelicious,
} from '@/components/sections';

export function Home() {
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
}

export default Home;
