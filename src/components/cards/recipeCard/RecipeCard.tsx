import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss';
import { IRecipe } from '@/api';
import { EButtonType, EUrls } from '@/utils';
import { LikeIcon } from '@/components/icons';

const RecipeCard: React.FC<IRecipe> = ({ title, image, id }) => {
  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Link to={`${EUrls.RECIPE}/${id}`} className={styles.card}>
      <button type={EButtonType.BUTTON} className={styles.like} onClick={handleLikeClick}>
        <LikeIcon />
      </button>
      <div className={styles.img}>
        <img src={image} alt={title} width={350} height={265} />
      </div>
      <div className={styles.name}>{title}</div>
    </Link>
  );
};

export default RecipeCard;
