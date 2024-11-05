import React from 'react';
import { AdminRoles, AdminUsers } from '..';
import { AdminModerMain } from '@/components/layouts';

const AdminPanel: React.FC = () => {
  const tabButtons = [
    { label: 'Users', value: 'users' },
    { label: 'Roles', value: 'roles' },
  ];

  const tabContents = {
    users: <AdminUsers />,
    roles: <AdminRoles />,
  };

  return <AdminModerMain title="Admin Panel" role="ADMIN" tabContents={tabContents} tabButtons={tabButtons} />;
};

export default AdminPanel;
