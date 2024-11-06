import React from 'react';
import { Helmet } from 'react-helmet';
import { EActionType, EUrls, FRONT_URL } from '@/utils';
import { useParams } from 'react-router-dom';
import { RecipeForm } from '@/components/forms';
import { RecipeCategoriePageLayout } from '@/components/layouts';

const UpdateRecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Update Recipe | Tastebite</title>
        <meta
          name="description"
          content="Update and refine your favorite recipes on Tastebite. Easily edit ingredients, instructions, and photos, ensuring your meal preparations are always perfect."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.UPDATE_RECIPE}/${id}`} />
      </Helmet>
      <main>
        <RecipeCategoriePageLayout title={`Update Recipe №${id}`}>
          <RecipeForm actionType={EActionType.UPDATE} />
        </RecipeCategoriePageLayout>
      </main>
    </>
  );
};

export default UpdateRecipePage;
