import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@/components/elements';
import styles from './SuperDeliciousCard.module.scss';

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
    <Link to={link} className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={name} width={348} height={265} />
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <Rating rating={rating} />
          <div className={styles.name}>{name}</div>
          <div className={styles.author}>
            <div className={styles.authorIcon}>
              {author.img ? (
                <img src={author.img} alt={author.name} width={32} height={32} />
              ) : (
                <img src="/img/templates/profile.svg" alt="Default Profile" width={32} height={32} />
              )}
            </div>
            <div className={styles.authorName}>{author.name}</div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <img src="/icons/calendar.svg" alt="Calendar Icon" width={16} height={18} />
            {date}
          </div>
          <div className={styles.blockItem}>
            <img src="/icons/comments.svg" alt="Comments Icon" width={16} height={18} />
            {comments}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuperDeliciousCard;
