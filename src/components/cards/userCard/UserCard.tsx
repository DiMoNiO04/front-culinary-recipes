import React, { useState } from 'react';
import { ConfirmAction } from '@/components/modals';
import styles from './UserCard.module.scss';
import { IUser } from '@/api';
import { useGetRoles } from '@/api/hooks';
import { Button } from '@/components/ui';
import { EButtonClass, EButtonSize, EButtonType } from '@/utils';

const UserCard: React.FC<IUser> = ({ id, firstName, lastName, email, recipes, roles, bannedId, bannedUser }) => {
  const [banReason, setBanReason] = useState('');
  const [newRole, setNewRole] = useState(roles[0].value);
  const [isBanned, setIsBanned] = useState(Boolean(bannedId));
  const [isBanModalOpen, setIsBanModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const { data: availableRoles, isError: rolesError } = useGetRoles();

  const openBanModal = () => setIsBanModalOpen(true);
  const closeBanModal = () => setIsBanModalOpen(false);

  const openRoleModal = () => setIsRoleModalOpen(true);
  const closeRoleModal = () => setIsRoleModalOpen(false);

  const handleConfirmBan = async () => {
    // await updateUserBanStatus(id, banReason);
    setIsBanned(true);
    closeBanModal();
  };

  const handleConfirmRoleChange = async () => {
    // await updateUserRole(id, newRole);
    closeRoleModal();
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.infoBlock}>
          <b>First Name:</b> {firstName}
        </div>
        <div className={styles.infoBlock}>
          <b>Last Name:</b> {lastName}
        </div>
        <div className={styles.infoBlock}>
          <b>Email:</b> {email}
        </div>
        <div className={styles.infoBlock}>
          <b>Count recipes:</b> {recipes.length}
        </div>
        <div className={styles.infoBlock}>
          <b>Role:</b> {roles[0].value}
        </div>
        {isBanned && (
          <div className={styles.infoBlock}>
            <b>Reason Ban:</b> {bannedUser?.reason || banReason}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {!isBanned ? (
          <div className={styles.banSection}>
            <input
              type="text"
              placeholder="Enter ban reason"
              value={banReason}
              onChange={(e) => setBanReason(e.target.value)}
              className={styles.banInput}
            />
            <Button
              text="Ban User"
              nameClass={EButtonClass.SEC}
              typeBtn={EButtonType.BUTTON}
              size={EButtonSize.SM}
              isLink={false}
              handle={openBanModal}
            />
          </div>
        ) : (
          <Button
            text="Unban User"
            nameClass={EButtonClass.SEC}
            typeBtn={EButtonType.BUTTON}
            size={EButtonSize.SM}
            isLink={false}
            handle={openBanModal}
          />
        )}

        <div className={styles.roleSection}>
          {availableRoles ? (
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className={styles.roleSelect}>
              {availableRoles.map((role) => (
                <option key={role.id} value={role.value}>
                  {role.value}
                </option>
              ))}
            </select>
          ) : rolesError ? (
            <p className={styles.error}>Error loading roles</p>
          ) : (
            <p>Loading roles...</p>
          )}
          <Button
            text="Change Role"
            nameClass={EButtonClass.DEF}
            typeBtn={EButtonType.BUTTON}
            size={EButtonSize.SM}
            isLink={false}
            handle={openRoleModal}
          />
        </div>
      </div>

      <ConfirmAction
        isModalOpen={isBanModalOpen}
        onClose={closeBanModal}
        onConfirm={handleConfirmBan}
        title={isBanned ? 'Are you sure you want to unban this user?' : 'Are you sure you want to ban this user?'}
      />

      <ConfirmAction
        isModalOpen={isRoleModalOpen}
        onClose={closeRoleModal}
        onConfirm={handleConfirmRoleChange}
        title={`Are you sure you want to change the role to "${newRole}"?`}
      />
    </div>
  );
};

export default UserCard;
