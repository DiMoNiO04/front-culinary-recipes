import React from 'react';
import { recipesCards } from '@/data';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import { RecipeCard } from '@/components/cards';
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

        {recipesCards.length > 0 ? (
          <div className={styles.cards}>
            {recipesCards.map((card) => (
              <RecipeCard {...card} key={card.id} />
            ))}
          </div>
        ) : (
          <div className={styles.nothing}>Nothing was found for your request</div>
        )}

        {recipesCards.length > 0 && (
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
