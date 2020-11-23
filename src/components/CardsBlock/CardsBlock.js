import React from 'react';
import PropTypes from 'prop-types';

import DataCard from '../DataCard';
import Loader from '../Loader';
import { LOADER } from '../../globals/constants';
import { useStyles } from './CardsBlock.style';

function CardsBlock({ dataToShow, isLoading }) {
  const classes = useStyles();

  return (
    <div className={classes.cardsBlockContainer}>
      {isLoading ? (
        <Loader type={LOADER.page.title} />
      ) : (
        dataToShow.map(dataObject => (
          <DataCard key={dataObject.id} dataObject={dataObject} />
        ))
      )}
    </div>
  );
}

CardsBlock.propTypes = {
  dataToShow: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CardsBlock;
