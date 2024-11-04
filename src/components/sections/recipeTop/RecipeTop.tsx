import React, { useState, useEffect } from 'react';
import { LikeIcon } from '@/components/icons';
import { Rating } from '@/components/elements';
import { EButtonType, EUrls } from '@/utils';
import styles from './RecipeTop.module.scss';
import { IAuthorRecipe } from '@/api';
import { Link } from 'react-router-dom';
import { useAddFavorite, useGetFavorites, useRemoveFavorite } from '@/api/hooks';

interface IRecipeTop {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  createdAt: string;
  author: IAuthorRecipe | undefined;
  category: string;
}

const RecipeTop: React.FC<IRecipeTop> = ({ id, title, category, author, createdAt, shortDescription, image }) => {
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
    <div className={styles.top}>
      <div className={styles.panel}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.panelBnts}>
          <button type={EButtonType.BUTTON} className={styles.btnLike} onClick={handleLikeClick}>
            <LikeIcon color={isLiked ? '#ff642f' : '#8B8D95'} />
          </button>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.author}>
          <img src="/icons/profile.svg" width={32} height={32} alt="Profile" />
          <span>
            {author?.firstName} {author?.lastName}
          </span>
        </div>
        <div className={styles.calendar}>
          <img src="/icons/calendar.svg" width={16} height={16} alt="Calendar" />
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <Rating rating={5} />
        <div className={styles.category}>
          <b>Category:</b>
          <Link to={`${EUrls.CATEGORIES}/${category}`}>{category}</Link>
        </div>
      </div>
      <p className={styles.description}>{shortDescription}</p>
      <div className={styles.img}>
        <img src={image} width={1100} height={630} alt={title} />
      </div>
    </div>
  );
};

export default RecipeTop;
