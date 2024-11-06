import React from 'react';
import { Helmet } from 'react-helmet';
import { EActionType, EUrls, FRONT_URL } from '@/utils';
import { RoleForm } from '@/components/forms';
import { CreateUpdatePageLayout } from '@/components/layouts';

const CreateRolePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Create New Role | Tastebite</title>
        <link rel="canonical" href={`${FRONT_URL}${EUrls.CREATE_ROLE}`} />
      </Helmet>
      <main>
        <CreateUpdatePageLayout title="Create New Role">
          <RoleForm actionType={EActionType.CREATE} />
        </CreateUpdatePageLayout>
      </main>
    </>
  );
};

export default CreateRolePage;
