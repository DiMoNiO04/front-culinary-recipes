import React from 'react';
import { recipesCards } from '@/data';
import { LoadMoreBtn, RecipesCardsList } from '@/components/elements';
import { Select } from '@/components/ui';
import styles from './FavoritesContent.module.scss';

const FavoritesContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.block}>
          <div className={styles.titles}>
            <div className={styles.titleBlock}>
              <img src="/icons/favoritesIcon.svg" alt="" width={44} height={44} />
              <h1>Favorites</h1>
            </div>
            <Select
              name="sort"
              value={null}
              options={[
                { id: 1, name: 'Price' },
                { id: 2, name: 'Popularity' },
                { id: 3, name: 'Newest' },
              ]}
            />
          </div>
          <div className={styles.info}>
            <button type="button" className={styles.btnDel}>
              <img src="/icons/deleteIcon.svg" alt="" width={20} height={20} />
              <span>Delete all</span>
            </button>
            <div className={styles.count}>{`(98 recipes)`}</div>
          </div>
        </div>

        <RecipesCardsList cards={recipesCards} msg="Add recipes to favorites" />

        {recipesCards.length > 0 && <LoadMoreBtn />}
      </div>
    </section>
  );
};

export default FavoritesContent;
