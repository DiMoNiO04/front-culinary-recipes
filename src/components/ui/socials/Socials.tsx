import React from 'react';
import styles from './Socials.module.scss';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/icons';

const Socials: React.FC = () => {
  return (
    <div className={styles.icons}>
      <Link href="#" className={styles.icon}>
        <FacebookIcon />
      </Link>
      <Link href="#" className={styles.icon}>
        <TwitterIcon />
      </Link>
      <Link href="#" className={styles.icon}>
        <InstagramIcon />
      </Link>
    </div>
  );
};

export default Socials;
