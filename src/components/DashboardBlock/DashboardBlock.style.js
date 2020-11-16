import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dashboardBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'inherit',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  fieldNavWrapper: {
    display: 'flex',
    backgroundColor: theme.color.headerBackgroundColor,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    'overflow-x': 'auto',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minWidth: theme.size.fieldNavigationWidth,
      padding: `${theme.customSpacing.base} ${theme.customSpacing.base} ${theme.customSpacing.small} 0`,
    },
  },
  outerItemWrapper: {
    display: 'flex',
    'overflow-x': 'auto',
  },
  mainItemWrapper: {
    display: 'flex',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'column',
    },
  },
  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    height: 'auto',
    margin: `0 ${theme.customSpacing.small}`,
    outline: 'none',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
      height: theme.size.fieldItemHeightLargeScreen,
      margin: `0 0 ${theme.customSpacing.small} 0`,
    },
  },
  checkedItemWrapper: {
    cursor: 'default',
  },
  checkedItem: {
    backgroundColor: theme.color.primaryColor,
    borderBottomLeftRadius: theme.size.fieldItemLength,
    borderBottomRightRadius: theme.size.fieldItemLength,
    height: theme.size.fieldItemThickness,
    width: theme.size.fieldItemLength,
    '@media only screen and (min-width: 600px)': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: theme.size.fieldItemLength,
      borderTopRightRadius: theme.size.fieldItemLength,
      height: theme.size.fieldItemHeightLargeScreen,
      width: theme.size.fieldItemThickness,
    },
  },
  itemNameWrapper: {
    '@media only screen and (min-width: 600px)': {
      marginLeft: theme.customSpacing.small,
    },
  },
  contentWrapper: {
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} 0`,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      padding: theme.customSpacing.base,
    },
  },
  tabAndCardsWrapper: {},
  tabBarContainer: {
    backgroundColor: theme.color.lightTextColor,
    padding: `0 ${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      borderRadius: theme.border.borderRadius,
    },
  },
  tabBarWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'default',
    height: theme.size.tabHeight,
    'overflow-x': 'auto',
    '@media only screen and (min-width: 600px)': {
      justifyContent: 'space-around',
    },
  },
  tabWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `${theme.border.tabBorder.size} solid transparent`,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: `${theme.border.tabBorder.size} solid transparent`,
    boxSizing: 'border-box',
    color: theme.color.tabNotSelectedColor,
    cursor: 'pointer',
    height: 'inherit',
    outline: 'none',
    padding: `0 ${theme.customSpacing.small}`,
  },
  checkedTab: {
    color: theme.color.titleTextColor,
    borderBottom: `${theme.border.tabBorder.size} solid ${theme.color.primaryColor}`,
  },
}));
