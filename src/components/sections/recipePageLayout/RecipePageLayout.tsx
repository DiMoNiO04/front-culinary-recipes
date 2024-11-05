import React from 'react';
import styles from './RecipePageLayout.module.scss';

interface IRecipePageLayout {
  title: string;
  children: React.ReactNode;
}

const RecipePageLayout: React.FC<IRecipePageLayout> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default RecipePageLayout;
