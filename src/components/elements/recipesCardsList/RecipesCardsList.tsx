import React from 'react';
import { RecipeCard } from '@/components/cards';
import { NothingMessage, Loading, ErrorFetch } from '@/components/ui';
import { IRecipe } from '@/api';
import styles from './RecipesCardsList.module.scss';

interface IRecipesCardsList {
  cards: IRecipe[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const RecipesCardsList: React.FC<IRecipesCardsList> = ({ cards, isLoading, isError }) => {
  if (isLoading) return <Loading />;
  if (isError) return <ErrorFetch />;

  if (!cards || cards.length === 0) {
    return <NothingMessage text="There are no recipes in this category" />;
  }

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <RecipeCard {...card} key={card.id} />
      ))}
    </div>
  );
};

export default RecipesCardsList;
