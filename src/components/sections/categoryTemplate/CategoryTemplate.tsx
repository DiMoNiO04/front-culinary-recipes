import React from 'react';
import { recipesCards } from '@/data';
import { Select } from '@/components/ui';
import { LoadMoreBtn, RecipesCardsList } from '@/components/elements';
import styles from './CategoryTemplate.module.scss';

const CategoryTemplate: React.FC = () => {
  return (
    <>
      <section className={styles.sectionFirst}>
        <img src="/img/templates/category.webp" alt="" width={1920} height={300} />
      </section>

      <section className={styles.sections}>
        <div className="container">
          <div className={styles.block}>
            <div className={styles.titles}>
              <div className={styles.titleBlock}>
                <h1 className={styles.title}>Desserts</h1>
                <span>(98 Recipes)</span>
              </div>
              <div className={styles.subtitle}>
                One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal.
                Here is a recipe I created after having this dish in a restaurant. Enjoy!
              </div>
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

          <RecipesCardsList cards={recipesCards} msg="There are no recipes in this category" />

          {recipesCards.length > 0 && <LoadMoreBtn />}
        </div>
      </section>
    </>
  );
};

export default CategoryTemplate;
