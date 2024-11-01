import React from 'react';
import { Helmet } from 'react-helmet';
import { AlsoLike, RecipeContent } from '@/components/sections';
import { EUrls, FRONT_URL } from '@/utils';
import { useParams } from 'react-router-dom';
import { useGetRecipe } from '@/api/hooks';
import { capitalizeFirstLetter, getDescriptionRecipe } from '@/utils/functions';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: recipe, isLoading, isError } = useGetRecipe(Number(id));

  if (!recipe) return;

  return (
    <>
      <Helmet>
        <title>{`${capitalizeFirstLetter(recipe.title)} | TasteBite`}</title>
        <meta name="description" content={getDescriptionRecipe(recipe)} />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.RECIPE}/${id}`} />
      </Helmet>
      <main>
        <RecipeContent />
        <AlsoLike category={recipe.category?.name || ''} />
      </main>
    </>
  );
};

export default RecipePage;
