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
  ICON_TOOLTIP_LABEL,
  LOADER,
  IMAGE,
  SIGN_UP_SECTION,
  SNACKBAR,
} from '../../globals/constants';
import Loader from '../../components/Loader';
import normalizeString from '../../helpers/normalizeString';
import ROUTES from '../../routes';
import TooltipIconComponent from '../../components/TooltipIconComponent';
import { useStyles } from './Signup.style';
import validateEmail from '../../helpers/validateEmail';
import validatePassword from '../../helpers/validatePassword';

function Signup({ handleOpenSnackbar, handleSnackbarContent }) {
  const classes = useStyles();
  const history = useHistory();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openPasswordErrorTooltip, setOpenPasswordErrorTooltip] = useState(
    false
  );
  const [openPasswordInfoTooltip, setOpenPasswordInfoTooltip] = useState(false);
  const [openUsernameErrorTooltip, setOpenUsernameErrorTooltip] = useState(
    false
  );
  const [openUsernameInfoTooltip, setOpenUsernameInfoTooltip] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    const { value } = event.target;
    setUsername(value);

    if (validateEmail(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    setPassword(value);

    if (validatePassword(value)) {
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
      await API.postUser(newUser);

      handleSnackbarContent(true, SNACKBAR.message.signUpSuccess);

      history.push(routeToRedirect);
    } catch (e) {
      setLoading(false);

      handleSnackbarContent(false, e.message);
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
      if (isEmailValid && isPasswordValid) {
        await handleSingUp();
      }
    }
  };

  const handleShowPasswordErrorTooltip = () => {
    setOpenPasswordErrorTooltip(!openPasswordErrorTooltip);
  };

  const handleShowPasswordInfoTooltip = () => {
    setOpenPasswordInfoTooltip(!openPasswordInfoTooltip);
  };

  const handleShowUsernameErrorTooltip = () => {
    setOpenUsernameErrorTooltip(!openUsernameErrorTooltip);
  };

  const handleShowUsernameInfoTooltip = () => {
    setOpenUsernameInfoTooltip(!openUsernameInfoTooltip);
  };

  const handleInputFocus = () => {
    setOpenUsernameErrorTooltip(false);
    setOpenUsernameInfoTooltip(false);

    setOpenPasswordErrorTooltip(false);
    setOpenPasswordInfoTooltip(false);
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
                error={!!username && !isEmailValid}
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
                onFocus={handleInputFocus}
                onKeyDown={e => handleSubmitOnEnter(e)}
                placeholder={SIGN_UP_SECTION.placeholder.username}
                value={username}
              />
              <TooltipIconComponent
                errorMessageTitle={ICON_TOOLTIP_LABEL.username.invalidEmail}
                handleShowErrorTooltip={handleShowUsernameErrorTooltip}
                handleShowInfoTooltip={handleShowUsernameInfoTooltip}
                infoMessageTitle={ICON_TOOLTIP_LABEL.username.infoMessage}
                isCheck={isEmailValid}
                isError={!!username && !isEmailValid}
                openErrorTooltip={openUsernameErrorTooltip}
                openInfoTooltip={openUsernameInfoTooltip}
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
                onFocus={handleInputFocus}
                onKeyDown={e => handleSubmitOnEnter(e)}
                placeholder={SIGN_UP_SECTION.placeholder.password}
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
              <TooltipIconComponent
                errorMessageTitle={ICON_TOOLTIP_LABEL.password.invalidPassword}
                handleShowErrorTooltip={handleShowPasswordErrorTooltip}
                handleShowInfoTooltip={handleShowPasswordInfoTooltip}
                infoMessageTitle={ICON_TOOLTIP_LABEL.password.infoMessage}
                isCheck={isPasswordValid}
                isError={!!password && !isPasswordValid}
                openErrorTooltip={openPasswordErrorTooltip}
                openInfoTooltip={openPasswordInfoTooltip}
              />
            </div>
            <div className={classes.buttonWrapper}>
              <Button
                color="primary"
                disabled={
                  loading ||
                  !username ||
                  !password ||
                  !isEmailValid ||
                  !isPasswordValid
                }
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
