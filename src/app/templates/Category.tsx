import React from 'react';
import { Helmet } from 'react-helmet';
import { CategoryTemplate } from '@/components/sections';
import { EUrls, FRONT_URL } from '@/utils';

const CategoryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Category | TasteBite</title>
        <meta
          name="description"
          content="Discover a variety of delicious recipes in this category. Browse through our collection and find your next favorite dish!"
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.CATEGORY}`} />
      </Helmet>
      <main>
        <CategoryTemplate />
      </main>
    </>
  );
};

export default CategoryPage;
