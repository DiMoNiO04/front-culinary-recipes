import React from 'react';
import { TitleSection } from '@/components/ui';
import { SuperDeliciousCard } from '@/components/cards';
import { superDelicious } from '@/data';
import styles from './SuperDelicious.module.scss';

const SuperDelicious: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="Super Delicious" />
        <div className={styles.cards}>
          {superDelicious.slice(0, 6).map((card) => (
            <SuperDeliciousCard {...card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperDelicious;
