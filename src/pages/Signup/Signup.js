import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { BUTTON_LABEL, IMAGE, SIGNUP_SECTION } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Signup.style';

function Signup({ handleRoute, handleSingUp }) {
  const classes = useStyles();
  const history = useHistory();
  const { state } = useLocation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const signup = () => {
    const route = state?.from || ROUTES.home;

    handleSingUp(username, password);

    history.push(route);

    handleRoute(route);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      if (username && password) {
        signup();
      }
    }
  };

  return (
    <div className={classes.signupContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.inputSectionWrapper}>
          <Paper className={classes.paper} square>
            <div className={classes.titleWrapper}>
              <Typography variant="h4">{SIGNUP_SECTION.title}</Typography>
            </div>
            <div className={classes.usernameWrapper}>
              <TextField
                fullWidth
                id="input-for-username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                onChange={e => handleUsernameChange(e)}
                onKeyDown={e => handleSubmitOnEnter(e)}
                placeholder={SIGNUP_SECTION.placeholder.username}
                value={username}
              />
            </div>
            <div className={classes.passwordWrapper}>
              <TextField
                fullWidth
                id="input-for-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={e => handlePasswordChange(e)}
                onKeyDown={e => handleSubmitOnEnter(e)}
                placeholder={SIGNUP_SECTION.placeholder.password}
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
            </div>
            <div className={classes.buttonWrapper}>
              <Button
                color="primary"
                disabled={!username || !password}
                fullWidth
                onClick={signup}
                variant="contained"
              >
                {BUTTON_LABEL.signup}
              </Button>
            </div>
            <div className={classes.signupWrapper}>
              <Link to={ROUTES.login}>
                <Typography variant="subtitle1">
                  {SIGNUP_SECTION.loginLabel}
                </Typography>
              </Link>
            </div>
          </Paper>
        </div>
        <div className={classes.imageSectionWrapper}>
          <div className={classes.imageWrapper}>
            <img
              alt={IMAGE.signup.title}
              className={classes.image}
              src={IMAGE.signup.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  handleRoute: PropTypes.func.isRequired,
  handleSingUp: PropTypes.func.isRequired,
};

export default Signup;
