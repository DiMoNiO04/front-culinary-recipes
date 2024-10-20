import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchPanelCard.module.scss';

interface ISearchPanelCard {
  name: string;
  img: string;
  link: string;
  category: string | null;
  isCategory: boolean;
}

const SearchPanelCard: React.FC<ISearchPanelCard> = ({ name, img, link, category, isCategory }) => {
  return (
    <Link to={link} className={`${styles.card} ${isCategory ? styles.categoryCard : ''}`}>
      <div className={styles.img}>
        <img src={img} alt={name} width={65} height={65} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category || 'category'}</p>
      </div>
    </Link>
  );
};

export default SearchPanelCard;
