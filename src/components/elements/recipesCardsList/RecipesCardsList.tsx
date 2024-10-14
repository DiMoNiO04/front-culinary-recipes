import React from 'react';
import { RecipeCard } from '@/components/cards';
import { recipesCards } from '@/data';
import styles from './RecipesCardsList.module.scss';

interface IRecipesCardsList {
  cards: typeof recipesCards;
  msg?: string;
}

const RecipesCardsList: React.FC<IRecipesCardsList> = ({ cards, msg }) => {
  return (
    <>
      {cards.length > 0 ? (
        <div className={styles.cards}>
          {cards.map((card) => (
            <RecipeCard {...card} key={card.id} />
          ))}
        </div>
      ) : (
        <div className={styles.nothing}>{msg}</div>
      )}
    </>
  );
};

export default RecipesCardsList;
