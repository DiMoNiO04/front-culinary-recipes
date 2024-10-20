import React from 'react';
import { ChangePasswordForm } from '@/components/forms';
import { IModalProps, Modal } from '..';

const ChangePasswordModal: React.FC<IModalProps> = ({ isModalOpen, onClose }) => {
  const handleChangePassword = (data: unknown) => {
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
