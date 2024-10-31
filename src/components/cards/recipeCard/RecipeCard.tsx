import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss';
import { IRecipe } from '@/api';
import { EUrls } from '@/utils';

const RecipeCard: React.FC<IRecipe> = ({ title, image, id }) => {
  return (
    <Link to={`${EUrls.RECIPE}/${id}`} className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt={title} width={350} height={265} />
      </div>
      <div className={styles.name}>{title}</div>
    </Link>
  );
};

export default RecipeCard;
