import React from 'react';
import { Helmet } from 'react-helmet';
import { EActionType, EUrls, FRONT_URL } from '@/utils';
import { CategorieForm } from '@/components/forms';
import { RecipeCategoriePageLayout } from '@/components/layouts';

const CreateCategoriePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Create New Category | Tastebite</title>
        <meta
          name="description"
          content="Add a new recipe category to organize your favorite dishes on Tastebite. Customize categories to better manage your recipes and enhance your cooking experience."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.CREATE_CATEGORIE}`} />
      </Helmet>
      <main>
        <RecipeCategoriePageLayout title="Create New Category">
          <CategorieForm actionType={EActionType.CREATE} />
        </RecipeCategoriePageLayout>
      </main>
    </>
  );
};

export default CreateCategoriePage;
