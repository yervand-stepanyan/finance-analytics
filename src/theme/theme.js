import { createMuiTheme } from '@material-ui/core';

const FIELD_ITEM_SIZE = 32;
const FIELD_NAVIGATION_WIDTH = 120;
const HEADER_BUTTON_SIZE = 104;
const HEADER_HEIGHT_MOBILE = 56;
const HEADER_HEIGHT_LARGE_SCREEN = 64;
const LOGO_SIZE = 48;
const MAIN_SPACING_VALUE = 16;
const POPUP_MARGIN_VALUE = 2;
const SIGNIN_BUTTON_SIZE = 90;
const SIGNUP_BUTTON_SIZE = 94;

const headerBackgroundColor = '#ffffff';
const lightTextColor = '#ffffff';
const mainBodyColor = '#F5F7F9';
const mainTextColor = '#333333';
const primaryColor = '#3F51B5';
const titleTextColor = '#15214D';

export const theme = createMuiTheme({
  color: {
    headerBackgroundColor,
    lightTextColor,
    mainBodyColor,
    mainTextColor,
    primaryColor,
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
    fieldItemFullSize: `${FIELD_ITEM_SIZE}px`,
    fieldItemPartSize: `${FIELD_ITEM_SIZE / 4}px`,
    fieldNavigationWidth: `${FIELD_NAVIGATION_WIDTH + FIELD_ITEM_SIZE}px`,
    headerButton: `${HEADER_BUTTON_SIZE}px`,
    headerHeightMobile: `${HEADER_HEIGHT_MOBILE + POPUP_MARGIN_VALUE}px`,
    headerHeightLargeScreen: `${
      HEADER_HEIGHT_LARGE_SCREEN + POPUP_MARGIN_VALUE
    }px`,
    logo: `${LOGO_SIZE}px`,
    signinButton: `${SIGNIN_BUTTON_SIZE}px`,
    signupButton: `${SIGNUP_BUTTON_SIZE}px`,
  },
});
