import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LatestRecipeCard.module.scss';

interface ILatestRecipeCard {
  name: string;
  img: string;
  link: string;
}

const LatestRecipeCard: React.FC<ILatestRecipeCard> = ({ name, img, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={350} height={265} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default LatestRecipeCard;
