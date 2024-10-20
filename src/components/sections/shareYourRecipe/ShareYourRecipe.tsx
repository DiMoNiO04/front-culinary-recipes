import React from 'react';
import { Button, EButtonClass, EButtonSize, EButtonType, TitleSection } from '@/components/ui'; // Убедитесь, что этот путь корректен для вашего проекта
import styles from './ShareYourRecipe.module.scss';

const ShareYourRecipe: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.img}>
            <img src="/img/templates/shareYourRecipe.webp" alt="Share your recipe" width={255} height={255} />
          </div>
          <div className={styles.content}>
            <TitleSection title="Share your recipes" />
            <p className={styles.text}>
              Got a delicious recipe you&apos;d like to share with the world? Whether it&apos;s a family favorite or a
              new creation, we want to hear about it! Share your culinary masterpieces and inspire others to cook up
              something amazing. Start your recipe journey with us today!
            </p>
            <div className={styles.btn}>
              <Button
                text="Create new recipe"
                nameClass={EButtonClass.SEC}
                size={EButtonSize.LG}
                typeBtn={EButtonType.BUTTON}
                isLink={true}
                linkUrl="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareYourRecipe;