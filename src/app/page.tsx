import { MainHeader } from '@/components/layouts';
import {
  CurratedCollection,
  LatestRecipes,
  MailingList,
  PopularCategories,
  ShareYourRecipe,
  Slider,
  SuperDelicious,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <Slider />
        <PopularCategories />
        <SuperDelicious />
        <ShareYourRecipe />
        <CurratedCollection />
        <LatestRecipes />
        <MailingList />
      </main>
    </>
  );
}
