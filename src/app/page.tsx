import { MainHeader } from '@/components/layouts';
import { PopularCategories, Slider } from '@/components/sections';

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <Slider />
        <PopularCategories />
      </main>
    </>
  );
}
