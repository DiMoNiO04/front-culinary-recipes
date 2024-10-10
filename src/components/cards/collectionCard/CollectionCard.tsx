import React from 'react';
import Image from 'next/image';
import styles from './CollectionCard.module.scss';
import Link from 'next/link';

interface ICollectionCard {
  name: string;
  img: string;
  link: string;
  count: number;
}

const CollectionCard: React.FC<ICollectionCard> = ({ name, img, link, count }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={540} height={332} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.count}>{count} recipes</div>
      </div>
    </Link>
  );
};

export default CollectionCard;
