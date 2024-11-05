import React, { useState } from 'react';
import styles from './ModeratorPanel.module.scss';
import ModeratorCategories from '../moderatorCategories/ModeratorCategories';
import ModeratorRecipes from '../moderatorRecipes/ModeratorRecipes';

const ModeratorPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('categories');

  const renderContent = () => {
    switch (activeTab) {
      case 'categories':
        return <ModeratorCategories />;
      case 'recipes':
        return <ModeratorRecipes />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Moderator Panel</h1>

        <div className={styles.content}>
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
      </div>
    </section>
  );
};

export default ModeratorPanel;
