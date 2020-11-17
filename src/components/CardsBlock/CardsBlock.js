import React from 'react';

import { useStyles } from './CardsBlock.style';
import DataCard from '../DataCard';

function CardsBlock() {
  const cardData = [
    {
      salary: '10000',
      user: 'a@a.ru',
    },
    {
      salary: '5000',
      user: 'b@b.ru',
    },
    {
      salary: '7000',
      user: 'c@c.ru',
    },
  ];
  const classes = useStyles();

  return (
    <div className={classes.cardsBlockContainer}>
      {cardData.map(({ salary, user }) => (
        <DataCard key={user} salary={salary} user={user} />
      ))}
    </div>
  );
}

export default CardsBlock;
