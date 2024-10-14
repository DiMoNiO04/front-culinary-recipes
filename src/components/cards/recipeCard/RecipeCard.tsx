import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RecipeCard.module.scss';

interface IRecipeCard {
  name: string;
  img: string;
  link: string;
}

const RecipeCard: React.FC<IRecipeCard> = ({ name, img, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={350} height={265} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default RecipeCard;
