import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategorieCard.module.scss';

interface ICategorieCard {
  name: string;
  img: string;
  link: string;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, img, link }) => {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={name} width={255} height={255} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default CategorieCard;
