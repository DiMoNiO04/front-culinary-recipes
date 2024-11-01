import React from 'react';
import styles from './Ingredients.module.scss';

interface IIngredients {
  ingredients: string;
}

const Ingredients: React.FC<IIngredients> = ({ ingredients }) => {
  if (!ingredients) return null;

  const ingredientList = ingredients.split(';').map((ingredient) => ingredient.trim());

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Ingredients</h3>
      <ul className={styles.list}>
        {ingredientList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
