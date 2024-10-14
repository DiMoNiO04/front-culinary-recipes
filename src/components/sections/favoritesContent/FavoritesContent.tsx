import React from 'react';
import { recipesCards } from '@/data';
import { LoadMoreBtn, RecipesCardsList } from '@/components/elements';
import styles from './FavoritesContent.module.scss';

const FavoritesContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <RecipesCardsList cards={recipesCards} msg="Add recipes to favorites" />

        {recipesCards.length > 0 && <LoadMoreBtn />}
      </div>
    </section>
  );
};

export default FavoritesContent;
