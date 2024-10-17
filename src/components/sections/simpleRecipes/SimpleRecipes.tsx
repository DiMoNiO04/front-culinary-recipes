import React from 'react';
import Image from 'next/image';
import styles from './SimpleRecipes.module.scss';

const SimpleRecipes: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.info}>
            <h2 className={styles.title}>Simple, Easy Recipes for all</h2>
            <p className={styles.subtitle}>
              Juicy meatballs brisket slammin baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard
              hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set
              aside magic tbsp skillet, bay leaves brown centerpiece.
            </p>
          </div>
          <div className={styles.img}>
            <Image src={'/img/templates/simpleRecipes.webp'} alt="" width={570} height={470} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleRecipes;
