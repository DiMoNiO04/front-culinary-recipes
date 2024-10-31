import React from 'react';
import { Select } from '@/components/ui';
import styles from './CategoryTemplate.module.scss';
import { ICategory } from '@/api';

interface CategoryTemplateProps {
  category: ICategory;
  isError: boolean;
  isLoading: boolean;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ category, isError, isLoading }) => {
  if (!category) return;

  return (
    <>
      <section className={styles.sectionFirst}>
        <img src="/img/templates/category.webp" alt={category.name} width={1920} height={300} />
      </section>

      <section className={styles.sections}>
        <div className="container">
          <div className={styles.block}>
            <div className={styles.titles}>
              <div className={styles.titleBlock}>
                <h1 className={styles.title}>{category.name}</h1>
                <span>({category.countrecipes} Recipes)</span>
              </div>
              <div className={styles.subtitle}>{category.description}</div>
            </div>
            <Select
              name="sort"
              value={null}
              options={[
                { id: 1, name: 'Price' },
                { id: 2, name: 'Popularity' },
                { id: 3, name: 'Newest' },
              ]}
            />
          </div>

          {/* <RecipesCardsList cards={category.recipes} msg="There are no recipes in this category" />

          {category.recipes.length > 0 && <LoadMoreBtn />} */}
        </div>
      </section>
    </>
  );
};

export default CategoryTemplate;
