import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CollectionCard.module.scss';

interface ICollectionCard {
  name: string;
  img: string;
  link: string;
  count: number;
}

const CollectionCard: React.FC<ICollectionCard> = ({ name, img, link, count }) => {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={name} width={540} height={332} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.count}>{count} recipes</div>
      </div>
    </Link>
  );
};

export default CollectionCard;
