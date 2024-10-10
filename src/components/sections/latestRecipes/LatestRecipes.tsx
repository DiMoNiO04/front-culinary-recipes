import React from 'react';
import styles from './LatestRecipes.module.scss';
import { Button, EButtonClass, EButtonSize, EButtonType, TitleSection } from '@/components/ui';
import { recipes } from '@/data';
import { LatestRecipeCard } from '@/components/cards';

const LatestRecipes: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="Latest Recipes" />
        <div className={styles.cards}>
          {recipes.map((recipe) => (
            <LatestRecipeCard {...recipe} key={recipe.id} />
          ))}
        </div>
        <div className={styles.btnBlock}>
          <Button
            text="Load More"
            nameClass={EButtonClass.DEF}
            size={EButtonSize.LG}
            typeBtn={EButtonType.BUTTON}
            isLink={false}
            customClass={styles.btn}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestRecipes;
