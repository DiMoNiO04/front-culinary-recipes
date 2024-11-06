import React, { useState } from 'react';
import styles from './RoleCard.module.scss';
import { IRole } from '@/api';
import { DeleteIcon, EditIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import { EActionType, EButtonType, EUrls } from '@/utils';
import { ConfirmAction } from '@/components/modals';
import { Notification } from '@/components/ui';
import { useRole } from '@/api/hooks';

const RoleCard: React.FC<IRole> = ({ id, value, description }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { submitRole: deleteRole, isError, notificationMsg } = useRole(EActionType.DELETE, id);

  const openDeleteModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const closeDeleteModal = () => setIsModalOpen(false);

  const handleConfirmDelete = async () => {
    await deleteRole();
    closeDeleteModal();
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>{value}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.btns}>
          <button type={EButtonType.BUTTON} className={styles.btn} onClick={openDeleteModal}>
            <DeleteIcon />
          </button>
          <Link to={`${EUrls.UPDATE_ROLE}/${id}`} type={EButtonType.BUTTON} className={styles.btn}>
            <EditIcon />
          </Link>
        </div>
      </div>

      <ConfirmAction
        isModalOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        title={`Are you sure you want to delete this role '${value}' and all her users?`}
      />

      {notificationMsg && <Notification isSuccess={!isError} msg={notificationMsg} />}
    </>
  );
};

export default RoleCard;
