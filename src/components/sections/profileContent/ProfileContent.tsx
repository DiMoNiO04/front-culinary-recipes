import React, { useState } from 'react';
import { Button, EButtonClass, EButtonSize, EButtonType, Notification } from '@/components/ui';
import { LogOutIcon } from '@/components/icons';
import { ProfileForm } from '@/components/forms';
import { ChangePasswordModal, ConfirmAction } from '@/components/modals';
import { useDeleteAccount } from '@/api/hooks';
import { useLogout } from '@/hooks';
import styles from './ProfileContent.module.scss';

const ProfileContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>('/img/templates/profile.png');
  const [isModalChangePassOpen, setIsModalChangePassOpen] = useState<boolean>(false);
  const [isModalDelAccOpen, setIsModalDelAccOpen] = useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false); // State for logout confirmation modal

  const { handleDeleteAccount, notificationMsg, isError } = useDeleteAccount();
  const { handleLogout } = useLogout();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    const form = document.querySelector<HTMLFormElement>('form');
    form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  const openModalChangePass = () => setIsModalChangePassOpen(true);
  const closeModalChangePass = () => setIsModalChangePassOpen(false);
  const openDelAcc = () => setIsModalDelAccOpen(true);
  const closeDelAcc = () => setIsModalDelAccOpen(false);
  const openLogoutModal = () => setIsLogoutModalOpen(true); // Open logout confirmation modal
  const closeLogoutModal = () => setIsLogoutModalOpen(false); // Close logout confirmation modal

  const handleConfirmLogout = () => {
    handleLogout(); // Call the logout function
    closeLogoutModal(); // Close the modal after logout
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Profile</h1>
          <Button
            text="SAVE"
            nameClass={EButtonClass.SEC}
            typeBtn={EButtonType.BUTTON}
            size={EButtonSize.LG}
            isLink={false}
            handle={handleSubmit}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.fotoBlock}>
            <div className={styles.foto}>
              <img src={selectedImage} alt="Profile Image" width={128} height={128} />
            </div>
            <div className={styles.fotoBtns}>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <Button
                text="Change photo"
                nameClass={EButtonClass.SEC}
                typeBtn={EButtonType.BUTTON}
                size={EButtonSize.SM}
                isLink={false}
                handle={() => document.getElementById('fileInput')?.click()}
              />
              <Button
                text="Delete"
                nameClass={EButtonClass.DEF}
                typeBtn={EButtonType.BUTTON}
                size={EButtonSize.SM}
                isLink={false}
                handle={() => setSelectedImage('/img/templates/profile.svg')}
              />
            </div>
          </div>

          <div className={styles.form}>
            <ProfileForm />
            <div className={styles.passBtn}>
              <Button
                text="Change Password"
                nameClass={EButtonClass.DEF}
                typeBtn={EButtonType.BUTTON}
                size={EButtonSize.SM}
                isLink={false}
                handle={openModalChangePass}
              />
            </div>
          </div>

          <div className={styles.out}>
            <button type={EButtonType.BUTTON} className={styles.logOut} onClick={openLogoutModal}>
              <LogOutIcon />
              Sign out
            </button>
            <button type={EButtonType.BUTTON} className={styles.delete} onClick={openDelAcc}>
              Delete Account
            </button>
          </div>
        </div>
      </div>

      <ChangePasswordModal isModalOpen={isModalChangePassOpen} onClose={closeModalChangePass} />
      <ConfirmAction
        isModalOpen={isModalDelAccOpen}
        onClose={closeDelAcc}
        onConfirm={handleDeleteAccount}
        title="Are you sure you want to delete your account?"
      />
      <ConfirmAction
        isModalOpen={isLogoutModalOpen}
        onClose={closeLogoutModal}
        onConfirm={handleConfirmLogout}
        title="Are you sure you want to log out of your account?"
      />

      {notificationMsg && <Notification isSuccess={!isError} msg={notificationMsg} />}
    </section>
  );
};

export default ProfileContent;
