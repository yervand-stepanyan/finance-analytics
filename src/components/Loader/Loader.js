import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { LOADER } from '../../globals/constants';
import { useStyles } from './Loader.style';

function Loader({ type }) {
  const classes = useStyles();

  const loaderType = loader => {
    switch (loader) {
      case LOADER.button.title:
        return (
          <CircularProgress
            className={classes.buttonProgress}
            size={LOADER.button.size}
            thickness={LOADER.button.thickness}
          />
        );
      case LOADER.page.title:
        return (
          <div className={classes.pageLoaderContainer}>
            <CircularProgress
              size={LOADER.page.size}
              thickness={LOADER.page.thickness}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return loaderType(type);
}

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
