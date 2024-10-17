'use client';

import React from 'react';
import { CloseIcon } from '@/components/icons';
import styles from './Modal.module.scss';

export interface IModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

interface IModal {
  isModalOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ isModalOpen, onClose, title, children }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`} onClick={handleOverlayClick}>
      <div className={styles.modalInner}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          <CloseIcon />
        </button>

        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
