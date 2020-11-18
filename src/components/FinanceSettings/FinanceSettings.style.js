import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  financeSettingsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  signOutPopup: {
    position: 'absolute',
    right: theme.customSpacing.base,
    top: theme.customSpacing.xLarge,
    '@media only screen and (min-width: 600px)': {
      right: 0,
    },
  },
  signOutPopupHidden: {
    display: 'none',
  },
  paper: {
    padding: theme.customSpacing.base,
  },
  buttonIconImage: {
    height: 'inherit',
    width: 'inherit',
  },
}));
