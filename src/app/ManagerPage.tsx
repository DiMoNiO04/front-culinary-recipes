import React from 'react';
import { Helmet } from 'react-helmet';
import { ManagerPanel } from '@/components/sections/manager';
import { EUrls, FRONT_URL } from '@/utils';

const ManagerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Manager Panel | TasteBite</title>
        <meta
          name="description"
          content="Manager panel for overseeing content, managing data, and configuring site settings."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.MANAGER}`} />
      </Helmet>
      <main>
        <ManagerPanel />
      </main>
    </>
  );
};

export default ManagerPage;
