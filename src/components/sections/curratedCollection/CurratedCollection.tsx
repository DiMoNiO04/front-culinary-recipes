import React from 'react';
import styles from './CurratedCollection.module.scss';
import { TitleSection } from '@/components/ui';
import { collections } from '@/data';
import { CollectionCard } from '@/components/cards';

const CurratedCollection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <TitleSection title="Curated Collections" />
        <div className={styles.cards}>
          {collections.slice(0, 6).map((collection) => (
            <CollectionCard {...collection} key={collection.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurratedCollection;
