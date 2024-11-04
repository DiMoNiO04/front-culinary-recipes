import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IRecipe } from '@/api';
import { EButtonType, EUrls } from '@/utils';
import { DeleteIcon } from '@/components/icons';
import { useDeleteRecipe } from '@/api/hooks';
import { ConfirmAction } from '@/components/modals';
import { Notification } from '@/components/ui';
import styles from './MyRecipeCard.module.scss';

const MyRecipeCard: React.FC<IRecipe> = ({ title, image, id }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleDeleteRecipe, isError, notificationMsg } = useDeleteRecipe(id);

  const openDeleteModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const closeDeleteModal = () => setIsModalOpen(false);

  const handleConfirmDelete = async () => {
    await handleDeleteRecipe();
    closeDeleteModal();
  };

  return (
    <>
      <Link to={`${EUrls.RECIPE}/${id}`} className={styles.card}>
        <button type={EButtonType.BUTTON} className={styles.like} onClick={openDeleteModal}>
          <DeleteIcon />
        </button>
        <div className={styles.img}>
          <img src={image} alt={title} width={350} height={265} />
        </div>
        <div className={styles.name}>{title}</div>
      </Link>

      <ConfirmAction
        isModalOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        title={`Are you sure you want to delete this recipe '${title}'?`}
      />

      {notificationMsg && <Notification isSuccess={!isError} msg={notificationMsg} />}
    </>
  );
};

export default MyRecipeCard;
