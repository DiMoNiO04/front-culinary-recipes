import React, { useState } from 'react';
import styles from './AdminPanel.module.scss';
import { AdminRoles, AdminUsers } from '..';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <AdminUsers />;
      case 'roles':
        return <AdminRoles />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Admin Panel</h1>

        <div className={styles.content}>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabButton} ${activeTab === 'roles' ? styles.active : ''}`}
              onClick={() => setActiveTab('roles')}
            >
              Roles
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'users' ? styles.active : ''}`}
              onClick={() => setActiveTab('users')}
            >
              Users
            </button>
          </div>

          <div className={styles.tabContent}>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
