import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss';
import { IRecipe } from '@/api';
import { EButtonType, EUrls } from '@/utils';
import { LikeIcon } from '@/components/icons';
import { useAddFavorite, useGetFavorites, useRemoveFavorite } from '@/api/hooks';

const RecipeCard: React.FC<IRecipe> = ({ title, image, id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { data: favorites } = useGetFavorites();
  const { handleAddFavorite, isError: isAddError } = useAddFavorite(String(id));
  const { handleRemoveFavorite, isError: isRemoveError } = useRemoveFavorite(String(id));

  useEffect(() => {
    if (favorites && favorites.some((favorite) => favorite.id === id)) {
      setIsLiked(true);
    }
  }, [favorites, id]);

  const handleLikeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isLiked) {
      await handleRemoveFavorite();
      if (!isRemoveError) {
        setIsLiked(false);
      }
    } else {
      await handleAddFavorite();
      if (!isAddError) {
        setIsLiked(true);
      }
    }
  };

  return (
    <Link to={`${EUrls.RECIPE}/${id}`} className={styles.card}>
      <button
        type={EButtonType.BUTTON}
        className={`${styles.like} ${isLiked ? styles.liked : ''}`}
        onClick={handleLikeClick}
      >
        <LikeIcon color={isLiked ? '#ff642f' : '#8B8D95'} />
      </button>
      <div className={styles.img}>
        <img src={image} alt={title} width={350} height={265} />
      </div>
      <div className={styles.name}>{title}</div>
    </Link>
  );
};

export default RecipeCard;
