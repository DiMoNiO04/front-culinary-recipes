import React from 'react';
import styles from './Insruction.module.scss';

const Insruction: React.FC = () => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Instructions</h3>
      <ul className={styles.list}>
        <li>
          To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted
          butter and pulse 3-4 times to coat crumbs with butter.
        </li>
        <li>
          Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the
          bottom and sides of the tart tin. Chill for 30 min.
        </li>
        <li>
          Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and
          mix to combine. Set aside.
        </li>
        <li>Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.</li>
        <li>
          Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle
          attachment to mix until smooth.
        </li>
        <li>Add the warm cream and melted gelatin mixture and mix until well combined.</li>
        <li>
          Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the
          mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.
        </li>
        <li>
          Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the
          remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or
          the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and
          then sprinkle some more starts on top before chilling for 2 hours.
        </li>
        <li>Slice with a knife to serve.</li>
      </ul>
    </div>
  );
};

export default Insruction;
