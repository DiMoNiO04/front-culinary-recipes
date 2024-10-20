import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TeamCard.module.scss';

interface ITeamCard {
  name: string;
  description: string;
  img: string;
  link: string;
}

const TeamCard: React.FC<ITeamCard> = ({ name, description, img, link }) => {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={name} width={163} height={163} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

export default TeamCard;
