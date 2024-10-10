import React from 'react';
import styles from './CategorieCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
