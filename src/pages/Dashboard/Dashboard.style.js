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
    justifyContent: 'space-between',
    backgroundColor: theme.color.headerBackgroundColor,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minWidth: theme.size.fieldNavigationWidth,
      padding: `${theme.customSpacing.base} ${theme.customSpacing.base} ${theme.customSpacing.small} 0`,
    },
  },
  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    height: theme.size.fieldItemFullSize,
    outline: 'none',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
      marginBottom: theme.customSpacing.small,
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
      height: theme.size.fieldItemFullSize,
      width: theme.size.fieldItemPartSize,
    },
  },
  itemNameWrapper: {
    '@media only screen and (min-width: 600px)': {
      marginLeft: theme.customSpacing.small,
    },
  },
}));
