import React from 'react';
import Image from 'next/image';
import { recipesCards } from '@/data';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import { RecipeCard } from '@/components/cards';
import styles from './CategoryTemplate.module.scss';

const CategoryTemplate: React.FC = () => {
  return (
    <>
      <section className={styles.sectionFirst}>
        <Image src={'/img/templates/category.webp'} alt="" width={1920} height={300} />
      </section>

      <section className={styles.sections}>
        <div className="container">
          {recipesCards.length > 0 ? (
            <div className={styles.cards}>
              {recipesCards.map((card) => (
                <RecipeCard {...card} key={card.id} />
              ))}
            </div>
          ) : (
            <div className={styles.nothing}>There are no recipes in this category</div>
          )}

          {recipesCards.length > 0 && (
            <div className={styles.btn}>
              <Button
                text="Load More"
                nameClass={EButtonClass.DEF}
                size={EButtonSize.LG}
                typeBtn={EButtonType.BUTTON}
                isLink={false}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryTemplate;
