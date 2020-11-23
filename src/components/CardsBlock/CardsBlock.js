import React from 'react';
import PropTypes from 'prop-types';

import DataCard from '../DataCard';
import { useStyles } from './CardsBlock.style';

function CardsBlock({ dataToShow }) {
  const classes = useStyles();

  return (
    <div className={classes.cardsBlockContainer}>
      {dataToShow.map(dataObject => (
        <DataCard key={dataObject.id} dataObject={dataObject} />
      ))}
    </div>
  );
}

CardsBlock.propTypes = {
  dataToShow: PropTypes.array.isRequired,
};

export default CardsBlock;
