import React from 'react';
import { ErrorFetch, Loading, NothingMessage, TitleSection } from '@/components/ui';
import { RecipesCardsList } from '@/components/elements';
import { useGetCategoryRecipes } from '@/api/hooks';

interface IAlsoLike {
  category: string;
}

const AlsoLike: React.FC<IAlsoLike> = ({ category }) => {
  const { data: recipes, isError, isLoading, message } = useGetCategoryRecipes(String(category));

  return (
    <section>
      <div className="container">
        <TitleSection title="You might also like" />

        {isLoading && <Loading />}
        {isError && <ErrorFetch />}

        {!isLoading && !isError && recipes ? (
          <RecipesCardsList cards={recipes.slice(0, 7)} isLoading={isLoading} isError={isError} msg={message} />
        ) : (
          !isLoading && !isError && <NothingMessage text={message!} />
        )}
      </div>
    </section>
  );
};

export default AlsoLike;
