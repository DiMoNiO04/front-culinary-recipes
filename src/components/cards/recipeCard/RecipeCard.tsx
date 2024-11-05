import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss';
import { IRecipe } from '@/api';
import { EButtonType, EFavoriteActionType, EUrls, TOKEN_KEY } from '@/utils';
import { LikeIcon } from '@/components/icons';
import { useGetFavorites } from '@/api/hooks';
import { useCookies } from 'react-cookie';
import useFavorites from '@/api/hooks/useFavorite';

const RecipeCard: React.FC<IRecipe> = ({ title, image, id }) => {
  const [cookies] = useCookies([TOKEN_KEY]);
  const [isLiked, setIsLiked] = useState(false);
  const { data: favorites } = useGetFavorites();
  const { executeFavoriteAction, isError } = useFavorites(
    isLiked ? EFavoriteActionType.REMOVE : EFavoriteActionType.ADD,
    String(id)
  );

  useEffect(() => {
    if (favorites && favorites.some((favorite) => favorite.id === id)) {
      setIsLiked(true);
    }
  }, [favorites, id]);

  const handleLikeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await executeFavoriteAction();

    if (!isError) {
      setIsLiked(!isLiked);
    }
  };

  return (
    <Link to={`${EUrls.RECIPE}/${id}`} className={styles.card}>
      {cookies[TOKEN_KEY] && (
        <button
          type={EButtonType.BUTTON}
          className={`${styles.like} ${isLiked ? styles.liked : ''}`}
          onClick={handleLikeClick}
        >
          <LikeIcon color={isLiked ? '#ff642f' : '#8B8D95'} />
        </button>
      )}
      <div className={styles.img}>
        <img src={image} alt={title} width={350} height={265} />
      </div>
      <div className={styles.name}>{title}</div>
    </Link>
  );
};

export default RecipeCard;
