import React from 'react';
import styles from './TeamCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ITeamCard {
  name: string;
  description: string;
  img: string;
  link: string;
}

const TeamCard: React.FC<ITeamCard> = ({ name, description, img, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={163} height={163} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

export default TeamCard;
