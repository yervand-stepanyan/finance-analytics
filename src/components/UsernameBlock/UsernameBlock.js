import React from 'react';
import PropTypes from 'prop-types';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './UsernameBlock.style';

function UsernameBlock({ username }) {
  const classes = useStyles();

  return (
    <div className={classes.usernameBlockContainer}>
      <div className={classes.usernameWrapper}>
        <Typography variant="subtitle1">{username}</Typography>
      </div>
      <div className={classes.userIconWrapper}>
        <AccountCircleIcon color="primary" fontSize="large" />
      </div>
    </div>
  );
}

UsernameBlock.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UsernameBlock;
