import React from 'react';
import { recipesCards } from '@/data';
import { LoadMoreBtn, RecipesCardsList } from '@/components/elements';
import styles from './SearchResults.module.scss';

const SearchResults: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Search Results</h1>

        <div className={styles.block}>
          <input type="text" placeholder="Search..." autoComplete="off" />
          <span>{`(98 recipes)`}</span>
        </div>

        <RecipesCardsList cards={recipesCards} msg="Nothing was found for your request" />

        {recipesCards.length > 0 && <LoadMoreBtn />}
      </div>
    </section>
  );
};

export default SearchResults;
