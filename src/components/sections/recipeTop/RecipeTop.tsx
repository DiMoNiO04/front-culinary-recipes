import React from 'react';
import { LikeIcon, ShareIcon } from '@/components/icons';
import { EButtonType } from '@/components/ui';
import styles from './RecipeTop.module.scss';
import { Rating } from '@/components/elements';

const RecipeTop: React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Strawberry Cream Cheesecake</h1>
        <div className={styles.panelBnts}>
          <button className={styles.btnLike} type={EButtonType.BUTTON}>
            <ShareIcon />
          </button>
          <button className={styles.btnLike} type={EButtonType.BUTTON}>
            <LikeIcon />
          </button>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.author}>
          <img src="/img/templates/profile.svg" width={32} height={32} alt="Profile" />
          <span>Tricia Albert</span>
        </div>
        <div className={styles.calendar}>
          <img src="/icons/calendar.svg" width={16} height={16} alt="Calendar" />
          <span>Yesterday</span>
        </div>
        <Rating rating={5} />
      </div>
      <p className={styles.description}>
        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is
        a recipe I created after having this dish in a restaurant. Enjoy!
      </p>
      <div className={styles.img}>
        <img src="/img/recipes/blueberryCarrotCake.webp" width={1100} height={630} alt="Blueberry Carrot Cake" />
      </div>
    </div>
  );
};

export default RecipeTop;
