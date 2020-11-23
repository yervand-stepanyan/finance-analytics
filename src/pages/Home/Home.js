import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import { HOME, IMAGE } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Home.style';

function Home({ currentUser }) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push(ROUTES.finance);
    }
  }, []);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.firstSectionWrapper}>
        <div className={classes.textContentWrapper}>
          <div>
            <Typography color="primary" variant="h3">
              {HOME.title}
            </Typography>
          </div>
          <div className={classes.section1Wrapper}>
            <Typography variant="h5">{HOME.section1}</Typography>
          </div>
          <div className={classes.section2Wrapper}>
            <Typography variant="h5">{HOME.section2}</Typography>
          </div>
        </div>
        <div className={classes.imageWrapper}>
          <img
            alt={IMAGE.finance1.title}
            className={classes.image}
            src={IMAGE.finance1.src}
          />
        </div>
      </div>
      <div className={classes.secondSectionWrapper}>
        <div className={classes.image2Wrapper}>
          <img
            alt={IMAGE.finance2.title}
            className={classes.image}
            src={IMAGE.finance2.src}
          />
        </div>
        <div className={classes.textContentWrapper}>
          <div>
            <Typography variant="h5">{HOME.section3}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  currentUser: PropTypes.object,
};

Home.defaultProps = {
  currentUser: null,
};

export default Home;
