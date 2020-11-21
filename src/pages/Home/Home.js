import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  return <div className={classes.homeContainer}>Home</div>;
}

Home.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Home;
