import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 48;
const MAIN_SPACING_VALUE = 16;
const HEADER_BUTTON_SIZE = 104;
const HEADER_HEIGHT = 58;
const LOGIN_BUTTON_SIZE = 90;
const SIGNUP_BUTTON_SIZE = 94;

const headerBackgroundColor = '#ffffff';
const mainBodyColor = '#F5F7F9';
const mainTextColor = '#333333';
const titleTextColor = '#15214D';

export const theme = createMuiTheme({
  color: {
    headerBackgroundColor,
    mainBodyColor,
    mainTextColor,
    titleTextColor,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    midLarge: `${MAIN_SPACING_VALUE * 1.5}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
    xxLarge: `${MAIN_SPACING_VALUE * 4}px`,
  },
  size: {
    headerButton: `${HEADER_BUTTON_SIZE}px`,
    headerHeight: `${HEADER_HEIGHT}px`,
    loginButton: `${LOGIN_BUTTON_SIZE}px`,
    logo: `${LOGO_SIZE}px`,
    signupButton: `${SIGNUP_BUTTON_SIZE}px`,
  },
});
