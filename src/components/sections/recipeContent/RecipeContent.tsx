import React from 'react';
import { InfoRecipe, Ingredients, Insruction } from '@/components/elements';
import { RecipeTop } from '..';
import styles from './RecipeContent.module.scss';

const RecipeContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <RecipeTop />
        <div className={styles.info}>
          <InfoRecipe />
          <div className={styles.content}>
            <Ingredients />
            <Insruction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeContent;
