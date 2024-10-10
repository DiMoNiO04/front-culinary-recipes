import { MainHeader } from '@/components/layouts';
import { CurratedCollection, LatestRecipes, MailingList, PopularCategories, Slider } from '@/components/sections';

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <Slider />
        <PopularCategories />
        <CurratedCollection />
        <LatestRecipes />
        <MailingList />
      </main>
    </>
  );
}
