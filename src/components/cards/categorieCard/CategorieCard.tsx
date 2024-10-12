import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategorieCard.module.scss';

interface ICategorieCard {
  name: string;
  img: string;
  link: string;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, img, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={255} height={255} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default CategorieCard;
