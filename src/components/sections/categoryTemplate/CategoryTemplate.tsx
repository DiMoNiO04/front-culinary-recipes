import React from 'react';
import { Select, ErrorFetch, Loading, NothingMessage } from '@/components/ui';
import styles from './CategoryTemplate.module.scss';
import { ICategory } from '@/api';
import { RecipesCardsList } from '@/components/elements';
import { useSortRecipes } from '@/hooks';
import { sortRecipes } from '@/data';

interface CategoryTemplateProps {
  category: ICategory | null;
  isError: boolean;
  isLoading: boolean;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ category, isError, isLoading }) => {
  const { sortOption, handleSortChange, sortedRecipes } = useSortRecipes(category?.recipes || []);

  return (
    <>
      <section className={styles.sectionFirst}>
        <img
          src="/img/templates/category.webp"
          alt={category ? category.name : 'Category Image'}
          width={1920}
          height={300}
        />
      </section>

      <section className={styles.sections}>
        <div className="container">
          {isLoading && <Loading />}
          {isError && <ErrorFetch />}

          {!isLoading && !isError && category ? (
            <>
              <div className={styles.block}>
                <div className={styles.titles}>
                  <div className={styles.titleBlock}>
                    <h1 className={styles.title}>{category.name}</h1>
                    <span>({category.countrecipes} Recipes)</span>
                  </div>
                  <div className={styles.subtitle}>{category.description}</div>
                </div>
                {category.recipes && category.recipes.length > 1 && (
                  <Select name="sort" value={sortOption} onChange={handleSortChange} options={sortRecipes} />
                )}
              </div>

              <RecipesCardsList cards={sortedRecipes()} />
            </>
          ) : (
            !isLoading && !isError && <NothingMessage text="Category not found." />
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryTemplate;
