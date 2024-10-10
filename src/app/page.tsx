import { MainHeader } from '@/components/layouts';
import { CurratedCollection, LatestRecipes, PopularCategories, Slider } from '@/components/sections';

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <Slider />
        <PopularCategories />
        <CurratedCollection />
        <LatestRecipes />
      </main>
    </>
  );
}
