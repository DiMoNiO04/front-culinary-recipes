import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss';

interface IRecipeCard {
  name: string;
  img: string;
  link: string;
}

const RecipeCard: React.FC<IRecipeCard> = ({ name, img, link }) => {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={name} width={350} height={265} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default RecipeCard;
