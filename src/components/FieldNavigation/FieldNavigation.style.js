import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fieldNavigationContainer: {
    display: 'flex',
    backgroundColor: theme.color.fieldNavBackgroundColor,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} 0`,
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
}));
