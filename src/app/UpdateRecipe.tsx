import React from 'react';
import { Helmet } from 'react-helmet';
import { EUrls, FRONT_URL } from '@/utils';
import { UpdateRecipe } from '@/components/sections';

const UpdateRecipePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Update Recipe | Tastebite</title>
        <meta
          name="description"
          content="Update and refine your favorite recipes on Tastebite. Easily edit ingredients, instructions, and photos, ensuring your meal preparations are always perfect."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.UPDATE_RECIPE}`} />
      </Helmet>
      <main>
        <UpdateRecipe />
      </main>
    </>
  );
};

export default UpdateRecipePage;
