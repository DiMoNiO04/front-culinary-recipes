import React from 'react';
import styles from './SearchPanelCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ISearchPanelCard {
  name: string;
  img: string;
  link: string;
  category: string | null;
  isCategory: boolean;
}

const SearchPanelCard: React.FC<ISearchPanelCard> = ({ name, img, link, category, isCategory }) => {
  return (
    <Link href={link} className={`${styles.card} ${isCategory && styles.categoryCard}`}>
      <div className={styles.img}>
        <Image src={img} alt="" width={65} height={65} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category || 'category'}</p>
      </div>
    </Link>
  );
};

export default SearchPanelCard;
