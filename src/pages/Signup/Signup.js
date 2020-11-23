import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

import API from '../../fetchAPI';
import {
  BUTTON_LABEL,
  IMAGE,
  LOADER,
  SIGN_UP_SECTION,
  SNACKBAR,
} from '../../globals/constants';
import Loader from '../../components/Loader';
import normalizeString from '../../helpers/normalizeString';
import ROUTES from '../../routes';
import { useStyles } from './Signup.style';
import validatePassword from '../../helpers/validatePassword';

function Signup({ handleOpenSnackbar, handleSnackbarContent }) {
  const classes = useStyles();
  const history = useHistory();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    if (validatePassword(passwordValue)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const postUser = async () => {
    try {
      setLoading(true);

      const routeToRedirect = ROUTES.signin;
      const normalizedUsername = normalizeString(username);
      const newUser = { username: normalizedUsername, password };
      const response = await API.postUser(newUser);

      if (response.username) {
        handleSnackbarContent(true, SNACKBAR.message.signUpSuccess);

        history.push(routeToRedirect);
      } else {
        handleSnackbarContent(false, response.message);
      }
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);

      handleOpenSnackbar();
    }
  };

  const handleSingUp = async () => {
    await postUser();
  };

  const handleSubmitOnEnter = async event => {
    if (event.key === 'Enter') {
      if (username && isPasswordValid) {
        await handleSingUp();
      }
    }
  };

  return (
    <div className={classes.signupContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.inputSectionWrapper}>
          <Paper className={classes.paper} square>
            <div className={classes.titleWrapper}>
              <Typography variant="h4">{SIGN_UP_SECTION.title}</Typography>
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
                placeholder={SIGN_UP_SECTION.placeholder.username}
                value={username}
              />
            </div>
            <div className={classes.passwordWrapper}>
              <TextField
                error={!!password && !isPasswordValid}
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
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={e => handlePasswordChange(e)}
                onKeyDown={e => handleSubmitOnEnter(e)}
                placeholder={SIGN_UP_SECTION.placeholder.password}
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
            </div>
            <div className={classes.buttonWrapper}>
              <Button
                color="primary"
                disabled={loading || !username || !password || !isPasswordValid}
                fullWidth
                onClick={handleSingUp}
                variant="contained"
              >
                {BUTTON_LABEL.signUp}
              </Button>
              {loading && <Loader type={LOADER.button.title} />}
            </div>
            <div className={classes.signupWrapper}>
              <div>
                <Typography variant="subtitle2">
                  {SIGN_UP_SECTION.signInLabel}
                </Typography>
              </div>
              <div className={classes.linkWrapper}>
                <Link to={ROUTES.signin}>
                  <Typography variant="subtitle1">
                    {SIGN_UP_SECTION.signInLink}
                  </Typography>
                </Link>
              </div>
            </div>
          </Paper>
        </div>
        <div className={classes.imageSectionWrapper}>
          <div className={classes.imageWrapper}>
            <img
              alt={IMAGE.signUp.title}
              className={classes.image}
              src={IMAGE.signUp.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  handleOpenSnackbar: PropTypes.func.isRequired,
  handleSnackbarContent: PropTypes.func.isRequired,
};

export default Signup;
