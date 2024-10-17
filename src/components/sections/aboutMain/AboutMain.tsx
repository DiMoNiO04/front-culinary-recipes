import React from 'react';
import Image from 'next/image';
import styles from './AboutMain.module.scss';

const AboutMain: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>About</h1>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>We’re a group of foodies who love cooking and the internet</h2>
          <Image src={'/img/templates/aboutMain.webp'} alt="" width={1112} height={455} />
          <p className={styles.description}>
            Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot
            low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee
            basted pork shoulder. Delicious butternut squash hunk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
