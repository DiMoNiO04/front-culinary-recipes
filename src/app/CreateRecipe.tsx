import React from 'react';
import { Helmet } from 'react-helmet';
import { EUrls, FRONT_URL } from '@/utils';
import { CreateRecipe } from '@/components/sections';

const CreateRecipePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Create New Recipe | Tastebite</title>
        <meta
          name="description"
          content="Create and customize your favorite recipes effortlessly on Tastebite. Enjoy a user-friendly interface to add ingredients, instructions, and photos, making meal preparation easier and more enjoyable."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.CREATE_RECIPE}`} />
      </Helmet>
      <main>
        <CreateRecipe />
      </main>
    </>
  );
};

export default CreateRecipePage;