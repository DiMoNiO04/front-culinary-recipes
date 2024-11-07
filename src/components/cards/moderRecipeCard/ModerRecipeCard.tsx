import React from 'react';
import styles from './ModerRecipeCard.module.scss';
import { IRecipe } from '@/api';
import { Link } from 'react-router-dom';
import { EUrls } from '@/utils';
import { useTogglePublishRecipe } from '@/api/hooks';

const ModerRecipeCard: React.FC<IRecipe> = ({ id, image, title, isPublished }) => {
  const { handleTogglePublish } = useTogglePublishRecipe();

  const handleToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleTogglePublish(id);
  };

  return (
    <Link to={`${EUrls.RECIPE}/${id}`} className={`${styles.card} ${!isPublished && styles.noPublish}`}>
      <div className={styles.img}>
        <img src={image} alt={title} width={350} height={265} />
      </div>
      <div className={styles.name}>{title}</div>

      <div className={styles.actions}>
        {isPublished ? (
          <button onClick={handleToggle} className={styles.unpublishButton}>
            Unpublish
          </button>
        ) : (
          <button onClick={handleToggle} className={styles.publishButton}>
            Publish
          </button>
        )}
      </div>
    </Link>
  );
};

export default ModerRecipeCard;
