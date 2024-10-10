import React from 'react';
import styles from './PopularCategories.module.scss';
import { TitleSection } from '@/components/ui';
import { categories } from '@/data';
import { CategorieCard } from '@/components/cards';

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
