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
    width: theme.size.logo,
  },
  logoImage: {
    width: 'inherit',
  },
  titleWrapper: {
    color: theme.color.titleTextColor,
    marginLeft: theme.customSpacing.base,
  },
  menuWrapper: {
    display: 'none',
    '@media only screen and (min-width: 600px)': {
      display: 'flex',
    },
  },
  menuButtonWrapper: {
    display: 'flex',
    '@media only screen and (min-width: 600px)': {
      display: 'none',
    },
  },
  menuPopup: {
    position: 'absolute',
    right: theme.customSpacing.base,
    top: theme.size.headerHeight,
    '@media only screen and (min-width: 600px)': {
      display: 'none',
    },
  },
  hideMenuPopup: {
    display: 'none',
  },
  paper: {
    padding: theme.customSpacing.base,
  },
  menuPopupContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
