import React from 'react';
import { Link } from 'react-router-dom';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import styles from './MailingList.module.scss';

const MailingList: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Deliciousness to your inbox</h2>
        <p className={styles.description}>Enjoy weekly hand picked recipes and recommendations</p>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder=" Email Address" className={styles.input} required />
          </div>
          <Button
            nameClass={EButtonClass.SEC}
            size={EButtonSize.LG}
            typeBtn={EButtonType.SUBMIT}
            text="JOIN"
            isLink={false}
          />
        </form>
        <p className={styles.text}>
          By joining our newsletter you agree to our <Link to="#">Terms and Conditions</Link>
        </p>
      </div>
    </section>
  );
};

export default MailingList;
