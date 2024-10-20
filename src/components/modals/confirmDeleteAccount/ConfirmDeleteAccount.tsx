import React from 'react';
import styles from './ConfirmDeleteAccount.module.scss';
import Modal, { IModalProps } from '../modal/Modal';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';

const ConfirmDeleteAccount: React.FC<IModalProps> = ({ isModalOpen, onClose }) => {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} title="Are you sure you want to delete your account?">
      <div className={styles.description}>
        To ensure an optimum user experience, we use cookies to collect some user data for advertising and analytics
        purposes read more
      </div>
      <div className={styles.btns}>
        <Button
          text="Delete"
          nameClass={EButtonClass.SEC}
          typeBtn={EButtonType.BUTTON}
          size={EButtonSize.LG}
          isLink={false}
        />
        <Button
          text="Cancel"
          nameClass={EButtonClass.DEF}
          typeBtn={EButtonType.BUTTON}
          size={EButtonSize.LG}
          isLink={false}
          handle={onClose}
        />
      </div>
    </Modal>
  );
};

export default ConfirmDeleteAccount;
