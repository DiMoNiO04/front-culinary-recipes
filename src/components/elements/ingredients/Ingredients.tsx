import React from 'react';
import styles from './Ingredients.module.scss';

const Ingredients: React.FC = () => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Ingredients</h3>
      <ul className={styles.list}>
        <li>300g marshmallows</li>
        <li>175g unsalted butter, melted</li>
        <li>500g Philadelphia cream cheese, softened</li>
        <li>250ml thickened/whipping cream, warm</li>
        <li>3 tbsp powdered gelatin + 3 tbsp water</li>
        <li>5 drops purple food gel</li>
        <li>3 drops blue food gel</li>
      </ul>
    </div>
  );
};

export default Ingredients;
