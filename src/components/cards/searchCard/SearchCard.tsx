import React from 'react';
import Link from 'next/link';
import styles from './SearchCard.module.scss';
import Image from 'next/image';

interface ISearchCard {
  name: string;
  img: string;
  link: string;
}

const SearchCard: React.FC<ISearchCard> = ({ name, img, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={255} height={190} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default SearchCard;
