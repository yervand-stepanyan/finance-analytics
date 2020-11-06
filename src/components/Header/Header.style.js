import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  noHeader: {
    display: 'none',
  },
  headerContainer: {
    backgroundColor: theme.color.headerBackgroundColor,
  },
  headerContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
  logoAndTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    width: theme.logoSize,
  },
  logoImage: {
    width: 'inherit',
  },
  titleWrapper: {
    color: theme.color.titleTextColor,
    marginLeft: theme.customSpacing.base,
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  menuItem: {
    marginRight: theme.customSpacing.base,
    '@media only screen and (min-width: 600px)': {
      marginRight: theme.customSpacing.xLarge,
    },
  },
  menuItemText: {
    color: theme.color.mainTextColor,
  },
  buttonGroupWrapper: {
    display: 'flex',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '96px',
  },
}));
