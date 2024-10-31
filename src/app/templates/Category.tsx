import React from 'react';
import { Helmet } from 'react-helmet';
import { CategoryTemplate } from '@/components/sections';
import { EUrls, FRONT_URL } from '@/utils';
import { useParams } from 'react-router-dom';
import { useGetCategory } from '@/api/hooks';
import { capitalizeFirstLetter, getDescriptionCategory } from '@/utils/functions';

const CategoryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data: category, isLoading, isError } = useGetCategory(String(name));

  return (
    <>
      <Helmet>
        <title>{`${capitalizeFirstLetter(name!)} | TasteBite`}</title>
        <meta name="description" content={getDescriptionCategory(category || undefined)} />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.CATEGORIES}/${name}`} />
      </Helmet>
      <main>
        <CategoryTemplate isError={isError} isLoading={isLoading} category={category} />
      </main>
    </>
  );
};

export default CategoryPage;
