import React from 'react';
import styles from './UpdateRecipe.module.scss';
import { RecipeForm } from '@/components/forms';

const UpdateRecipe: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Update Recipe</h1>

        <RecipeForm />
      </div>
    </section>
  );
};

export default UpdateRecipe;
