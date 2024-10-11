import { MainHeader } from '@/components/layouts';
import {
  CurratedCollection,
  LatestRecipes,
  MailingList,
  PopularCategories,
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
        <CurratedCollection />
        <LatestRecipes />
        <MailingList />
      </main>
    </>
  );
}
