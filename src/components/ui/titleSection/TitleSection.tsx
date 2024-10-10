import React from 'react';
import styles from './TitleSection.module.scss';

interface ITitleSection {
  title: string;
}

const TitleSection: React.FC<ITitleSection> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default TitleSection;
