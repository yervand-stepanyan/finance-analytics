import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: 'flex',
    minHeight: 'inherit',
    flexDirection: 'column',
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
    borderBottomLeftRadius: theme.size.fieldItemFullSize,
    borderBottomRightRadius: theme.size.fieldItemFullSize,
    height: theme.size.fieldItemPartSize,
    width: theme.size.fieldItemFullSize,
    '@media only screen and (min-width: 600px)': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: theme.size.fieldItemFullSize,
      borderTopRightRadius: theme.size.fieldItemFullSize,
      height: theme.size.fieldItemHeightLargeScreen,
      width: theme.size.fieldItemPartSize,
    },
  },
  itemNameWrapper: {
    '@media only screen and (min-width: 600px)': {
      marginLeft: theme.customSpacing.small,
    },
  },
  contentWrapper: {
    boxSizing: 'border-box',
    padding: theme.customSpacing.base,
    width: '100%',
  },
  tabBarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.color.primaryColor,
    color: theme.color.lightTextColor,
    cursor: 'default',
    height: theme.customSpacing.large,
  },
}));
