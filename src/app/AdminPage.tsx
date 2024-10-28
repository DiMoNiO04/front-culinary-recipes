import React from 'react';
import { Helmet } from 'react-helmet';
import { AdminPanel } from '@/components/sections/admin';
import { EUrls, FRONT_URL } from '@/utils';

const AdminPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Admin Panel | Tastebite</title>
        <meta name="description" content="Admin panel for managing website content, manage users and roles." />
        <link rel="canonical" href={`${FRONT_URL}${EUrls.ADMIN}`} />
      </Helmet>
      <main>
        <AdminPanel />
      </main>
    </>
  );
};

export default AdminPage;
