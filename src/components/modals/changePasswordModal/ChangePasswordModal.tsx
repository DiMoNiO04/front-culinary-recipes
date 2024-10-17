'use client';

import React from 'react';
import { ChangePasswordForm } from '@/components/forms';
import { Modal } from '..';

interface IChangePasswordModal {
  isModalOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<IChangePasswordModal> = ({ isModalOpen, onClose }) => {
  const handleChangePassword = (data: any) => {
    console.log('Change Password Data:', data);
    onClose();
  };

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} title="Change Password">
      <ChangePasswordForm onSubmit={handleChangePassword} />
    </Modal>
  );
};

export default ChangePasswordModal;
