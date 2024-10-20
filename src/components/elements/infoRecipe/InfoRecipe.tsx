import React from 'react';
import { EButtonType } from '@/components/ui';
import { PrinterIcon } from '@/components/icons';
import styles from './InfoRecipe.module.scss';

const InfoRecipe: React.FC = () => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <b>PREP TIME</b>
        <span>15 MIN</span>
      </div>
      <div className={styles.item}>
        <b>CALORIES</b>
        <span>278</span>
      </div>
      <div className={styles.item}>
        <button className={styles.print} type={EButtonType.BUTTON}>
          <PrinterIcon />
        </button>
      </div>
    </div>
  );
};

export default InfoRecipe;
