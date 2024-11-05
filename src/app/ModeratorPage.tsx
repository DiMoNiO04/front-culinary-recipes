import React from 'react';
import { Helmet } from 'react-helmet';
import { EUrls, FRONT_URL } from '@/utils';
import { ModeratorPanel } from '@/components/sections/moderator';

const ModeratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Moderator Panel | TasteBite</title>
        <meta
          name="description"
          content="Moderator panel for overseeing content, managing data, and configuring site settings."
        />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.MODERATOR}`} />
      </Helmet>
      <main>
        <ModeratorPanel />
      </main>
    </>
  );
};

export default ModeratorPage;
