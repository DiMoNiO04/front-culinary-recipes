import React from 'react';
import { Helmet } from 'react-helmet';
import { EActionType, EUrls, FRONT_URL } from '@/utils';
import { useParams } from 'react-router-dom';
import { CategorieForm } from '@/components/forms';
import { RecipeCategoriePageLayout } from '@/components/layouts';

const UpdateCategoriePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <Helmet>
        <title>Update Category | Tastebite</title>
        <meta
          name="description"
          content="Edit and manage your recipe categories on Tastebite. Customize categories to better organize your collection and enhance your cooking journey."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.UPDATE_CATEGORIE}/${name?.toLowerCase()}`} />
      </Helmet>
      <main>
        <RecipeCategoriePageLayout title={`Update Category ${name?.toLowerCase()}`}>
          <CategorieForm actionType={EActionType.UPDATE} />
        </RecipeCategoriePageLayout>
      </main>
    </>
  );
};

export default UpdateCategoriePage;
