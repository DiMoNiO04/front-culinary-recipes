import React from 'react';
import styles from './RecipeCategoriePageLayout.module.scss';

interface IRecipeCategoriePageLayout {
  title: string;
  children: React.ReactNode;
}

const RecipeCategoriePageLayout: React.FC<IRecipeCategoriePageLayout> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default RecipeCategoriePageLayout;
