import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menuSectionLargeScreenContainer: {
    display: 'none',
    '@media only screen and (min-width: 600px)': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  usernameBlockWrapper: {
    cursor: 'pointer',
  },
  usernameClickable: {
    cursor: 'pointer',
  },
  menuPopupWrapper: {
    position: 'absolute',
    right: theme.customSpacing.base,
    top: theme.size.headerHeightLargeScreen,
  },
  menuPopupHidden: {
    display: 'none',
  },
  paper: {
    padding: theme.customSpacing.base,
  },
}));
