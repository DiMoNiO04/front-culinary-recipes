import React from 'react';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn: React.FC = () => {
  return (
    <div className={styles.btn}>
      <Button
        text="Load More"
        nameClass={EButtonClass.DEF}
        size={EButtonSize.LG}
        typeBtn={EButtonType.BUTTON}
        isLink={false}
      />
    </div>
  );
};

export default LoadMoreBtn;
