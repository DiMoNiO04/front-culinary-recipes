import React from 'react';
import { TitleSection } from '@/components/ui';
import { CollectionCard } from '@/components/cards';
import { collections } from '@/data';
import styles from './CurratedCollection.module.scss';

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
