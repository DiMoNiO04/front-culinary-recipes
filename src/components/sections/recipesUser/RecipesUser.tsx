import React from 'react';
import styles from './RecipesUser.module.scss';
import { useGetMyRecipes } from '@/api/hooks';
import { ErrorFetch, Loading, NothingMessage } from '@/components/ui';
import { MyRecipeCard } from '@/components/cards';

const RecipesUser: React.FC = () => {
  const { data: recipes, isLoading, isError } = useGetMyRecipes();

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>My Recipes</h1>

        {isError && <ErrorFetch />}
        {isLoading && <Loading />}

        {!isLoading && !isError && (
          <>
            {recipes && recipes.length > 0 ? (
              <div className={styles.cards}>
                {recipes.map((recipe) => (
                  <MyRecipeCard key={recipe.id} {...recipe} />
                ))}
              </div>
            ) : (
              <NothingMessage text="You have no added recipes!" />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default RecipesUser;
