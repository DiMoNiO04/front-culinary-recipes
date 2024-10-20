import React from 'react';
import { TitleSection } from '@/components/ui';
import { CategorieCard } from '@/components/cards';
import { categories } from '@/data';
import styles from './PopularCategories.module.scss';

const PopularCategories: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="Popular Categories" />
        <div className={styles.cards}>
          {categories.slice(0, 6).map((categorie) => (
            <CategorieCard {...categorie} key={categorie.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
