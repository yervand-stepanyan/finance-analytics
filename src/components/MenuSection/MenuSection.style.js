import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menuSectionContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  menuItem: {
    marginRight: '0',
    '@media only screen and (min-width: 600px)': {
      marginRight: theme.customSpacing.xLarge,
    },
  },
  menuItemText: {
    color: theme.color.mainTextColor,
  },
  link: {
    textDecoration: 'none',
  },
  buttonGroupWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: theme.size.headerButton,
  },
  menuButtonWrapper: {
    '@media only screen and (min-width: 600px)': {
      display: 'flex',
    },
  },
  menuPopup: {
    position: 'absolute',
    right: theme.customSpacing.base,
    top: theme.size.headerHeight,
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
