import React from 'react';
import styles from './RecipeContent.module.scss';
import RecipeTop from '../recipeTop/RecipeTop';

const RecipeContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <RecipeTop />
      </div>
    </section>
  );
};

export default RecipeContent;
