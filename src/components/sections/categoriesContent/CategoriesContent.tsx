import React from 'react';
import { CategorieCard } from '@/components/cards';
import { categories } from '@/data';
import styles from './CategoriesContent.module.scss';

const CategoriesContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.cards}>
          {categories.map((categorie) => (
            <CategorieCard {...categorie} key={categorie.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesContent;
