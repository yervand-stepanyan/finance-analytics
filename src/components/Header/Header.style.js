import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    position: 'relative',
  },
  noHeader: {
    display: 'none',
  },
  appbar: {
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
}));
