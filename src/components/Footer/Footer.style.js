import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  noFooter: {
    display: 'none',
  },
  footerContainer: {
    backgroundColor: theme.color.titleTextColor,
    boxSizing: 'border-box',
    color: theme.color.headerBackgroundColor,
    cursor: 'default',
    padding: theme.customSpacing.base,
    position: 'relative',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  logoAndCreatorWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
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
    color: theme.color.headerBackgroundColor,
    marginLeft: theme.customSpacing.base,
  },
  link: {
    textDecoration: 'none',
  },
  creatorWrapper: {
    marginTop: theme.customSpacing.small,
    '@media only screen and (min-width: 600px)': {
      marginTop: 0,
    },
  },
  yearWrapper: {
    marginTop: theme.customSpacing.midLarge,
  },
}));
