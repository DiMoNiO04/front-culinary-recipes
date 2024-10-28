import React, { useState } from 'react';
import { ManagerCategories, ManagerRecipes } from '..';
import styles from './ManagerPanel.module.scss';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('categories');

  const renderContent = () => {
    switch (activeTab) {
      case 'categories':
        return <ManagerCategories />;
      case 'recipes':
        return <ManagerRecipes />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Manager Panel</h1>

        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'categories' ? styles.active : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'recipes' ? styles.active : ''}`}
            onClick={() => setActiveTab('recipes')}
          >
            Recipes
          </button>
        </div>

        <div className={styles.tabContent}>{renderContent()}</div>
      </div>
    </section>
  );
};

export default AdminPanel;
