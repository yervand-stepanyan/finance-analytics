import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 48;
const MAIN_SPACING_VALUE = 16;

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
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
});
