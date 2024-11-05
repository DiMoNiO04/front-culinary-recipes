import React from 'react';
import styles from './CreateRecipe.module.scss';
import { RecipeForm } from '@/components/forms';

const CreateRecipe: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Create New Recipe</h1>

        <RecipeForm />
      </div>
    </section>
  );
};

export default CreateRecipe;
