import React from 'react';
import styles from './SearchResults.module.scss';
import { searchCards } from '@/data';
import SearchCard from '@/components/cards/searchCard/SearchCard';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';

const SearchResults: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Search Results</h1>

        <div className={styles.block}>
          <input type="text" placeholder="Search..." autoComplete="off" />
          <span>{`(98 recipes)`}</span>
        </div>

        {searchCards.length > 0 ? (
          <div className={styles.cards}>
            {searchCards.map((card) => (
              <SearchCard {...card} key={card.id} />
            ))}
          </div>
        ) : (
          <div className={styles.nothing}>Nothing was found for your request</div>
        )}

        {searchCards.length > 0 && (
          <div className={styles.btn}>
            <Button
              text="Load More"
              nameClass={EButtonClass.DEF}
              size={EButtonSize.LG}
              typeBtn={EButtonType.BUTTON}
              isLink={false}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
