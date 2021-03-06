import { createMuiTheme } from '@material-ui/core';

const CARD_WIDTH = 300;
const FIELD_ITEM_HEIGHT_LARGE_SCREEN = 72;
const FIELD_ITEM_LENGTH = 48;
const FIELD_ITEM_THICKNESS = 8;
const FIELD_NAVIGATION_WIDTH = 150;
const FINANCE_SETTINGS_POPUP_MARGIN_TOP = 48;
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

const cardBackgroundColor = '#edfcff';
const checkedIconColor = '#20BA66';
const disabledFieldColor = '#999999';
const errorIconColor = '#EA4335';
const fieldNavBackgroundColor = '#ffffff';
const headerBackgroundColor = '#ffffff';
const infoIconColor = '#3F51B5';
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
    cardBackgroundColor,
    checkedIconColor,
    disabledFieldColor,
    errorIconColor,
    fieldNavBackgroundColor,
    headerBackgroundColor,
    infoIconColor,
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
    cardWidth: `${CARD_WIDTH}px`,
    fieldItemLength: `${FIELD_ITEM_LENGTH}px`,
    fieldItemHeightLargeScreen: `${FIELD_ITEM_HEIGHT_LARGE_SCREEN}px`,
    fieldItemThickness: `${FIELD_ITEM_THICKNESS}px`,
    fieldNavigationWidth: `${FIELD_NAVIGATION_WIDTH}px`,
    financeSettingsPopupMarginTop: `${FINANCE_SETTINGS_POPUP_MARGIN_TOP}px`,
    headerButton: `${HEADER_BUTTON_SIZE}px`,
    logo: `${LOGO_SIZE}px`,
    menuMarginTopMobile: `${HEADER_HEIGHT_MOBILE + POPUP_MARGIN_VALUE}px`,
    menuMarginTopLargeScreen: `${
      HEADER_HEIGHT_LARGE_SCREEN + POPUP_MARGIN_VALUE
    }px`,
    signinButton: `${SIGNIN_BUTTON_SIZE}px`,
    signupButton: `${SIGNUP_BUTTON_SIZE}px`,
    tabHeight: `${TAB_HEIGHT}px`,
  },
});
