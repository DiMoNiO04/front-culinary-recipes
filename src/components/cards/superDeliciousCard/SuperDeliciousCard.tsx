import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SuperDeliciousCard.module.scss';
import { Rating } from '@/components/elements';

interface ISuperDeliciousCard {
  img: string;
  link: string;
  name: string;
  author: {
    img: string | null;
    name: string;
  };
  date: string;
  comments: number | null;
  rating: number;
}

const SuperDeliciousCard: React.FC<ISuperDeliciousCard> = ({ img, comments, link, name, rating, author, date }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={348} height={265} />
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <Rating rating={rating} />
          <div className={styles.name}>{name}</div>
          <div className={styles.author}>
            <div className={styles.authorIcon}>
              {author.img ? (
                <Image src={author.img} alt="" width={32} height={32} />
              ) : (
                <Image src="/img/templates/profile.svg" alt="" width={32} height={32} />
              )}
            </div>
            <div className={styles.authorName}>{author.name}</div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <Image src={'/icons/calendar.svg'} alt="" width={16} height={18} />
            {date}
          </div>
          <div className={styles.blockItem}>
            <Image src={'/icons/comments.svg'} alt="" width={16} height={18} />
            {comments}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuperDeliciousCard;
