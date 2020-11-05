import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { BUTTON_LABEL } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Login.style';

function Login({ handleLogin }) {
  const classes = useStyles();
  const history = useHistory();
  const { state } = useLocation();

  const login = () => {
    handleLogin();

    history.push(state?.from || ROUTES.home);
  };

  return (
    <div className={classes.loginContainer}>
      <div>
        <Button color="primary" onClick={login} variant="contained">
          {BUTTON_LABEL.login}
        </Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
