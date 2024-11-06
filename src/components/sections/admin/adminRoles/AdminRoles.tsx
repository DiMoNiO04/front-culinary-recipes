import React from 'react';
import styles from './AdminRoles.module.scss';
import { useGetRoles } from '@/api/hooks';
import { Button, ErrorFetch, Loading, NothingMessage } from '@/components/ui';
import { EButtonClass, EButtonSize, EButtonType, EUrls } from '@/utils';
import { RoleCard } from '@/components/cards';

const AdminRoles: React.FC = () => {
  const { data: roles, isLoading, isError } = useGetRoles();

  return (
    <article>
      <div className={styles.titles}>
        <h2 className={styles.title}>Roles</h2>
        <Button
          text="Create new"
          nameClass={EButtonClass.SEC}
          size={EButtonSize.LG}
          typeBtn={EButtonType.BUTTON}
          isLink={true}
          linkUrl={EUrls.CREATE_ROLE}
        />
      </div>

      {isError && <ErrorFetch />}
      {isLoading && <Loading />}

      {!isLoading &&
        !isError &&
        (roles && roles.length > 0 ? (
          <div className={styles.cards}>
            {roles.map((role) => (
              <RoleCard key={role.id} {...role} />
            ))}
          </div>
        ) : (
          <NothingMessage text="No roles available at the moment!" />
        ))}
    </article>
  );
};

export default AdminRoles;
