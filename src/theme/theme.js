import { createMuiTheme } from '@material-ui/core';

const FIELD_ITEM_HEIGHT_LARGE_SCREEN = 72;
const FIELD_ITEM_LENGTH = 48;
const FIELD_ITEM_THICKNESS = 8;
const FIELD_NAVIGATION_WIDTH = 150;
const HEADER_BUTTON_SIZE = 104;
const HEADER_HEIGHT_MOBILE = 56;
const HEADER_HEIGHT_LARGE_SCREEN = 64;
const LOGO_SIZE = 48;
const MAIN_BORDER_RADIUS_VALUE = 8;
const MAIN_SPACING_VALUE = 16;
const POPUP_MARGIN_VALUE = 2;
const SIGNIN_BUTTON_SIZE = 90;
const SIGNUP_BUTTON_SIZE = 94;
const TAB_HEIGHT = 48;
const TAB_BORDER_SIZE = 3;

const fieldNavBackgroundColor = '#ffffff';
const headerBackgroundColor = '#ffffff';
const lightTextColor = '#ffffff';
const mainBackgroundColor = '#F5F7F9';
const mainTextColor = '#333333';
const primaryColor = '#3F51B5';
const tabBarBackgroundColor = '#ffffff';
const tabNotSelectedColor = '#808080';
const titleTextColor = '#15214D';

export const theme = createMuiTheme({
  border: {
    borderRadius: `${MAIN_BORDER_RADIUS_VALUE}px`,
    tabBorder: {
      size: `${TAB_BORDER_SIZE}px`,
    },
  },
  color: {
    fieldNavBackgroundColor,
    headerBackgroundColor,
    lightTextColor,
    mainBackgroundColor,
    mainTextColor,
    primaryColor,
    tabBarBackgroundColor,
    tabNotSelectedColor,
    titleTextColor,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    midLarge: `${MAIN_SPACING_VALUE * 1.5}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
    xxLarge: `${MAIN_SPACING_VALUE * 4}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 6}px`,
  },
  size: {
    fieldItemLength: `${FIELD_ITEM_LENGTH}px`,
    fieldItemHeightLargeScreen: `${FIELD_ITEM_HEIGHT_LARGE_SCREEN}px`,
    fieldItemThickness: `${FIELD_ITEM_THICKNESS}px`,
    fieldNavigationWidth: `${FIELD_NAVIGATION_WIDTH}px`,
    headerButton: `${HEADER_BUTTON_SIZE}px`,
    headerHeightMobile: `${HEADER_HEIGHT_MOBILE + POPUP_MARGIN_VALUE}px`,
    headerHeightLargeScreen: `${
      HEADER_HEIGHT_LARGE_SCREEN + POPUP_MARGIN_VALUE
    }px`,
    logo: `${LOGO_SIZE}px`,
    signinButton: `${SIGNIN_BUTTON_SIZE}px`,
    signupButton: `${SIGNUP_BUTTON_SIZE}px`,
    tabHeight: `${TAB_HEIGHT}px`,
  },
});
