import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  mobileMenuPopup: {
    position: 'absolute',
    marginLeft: theme.customSpacing.base,
    right: theme.customSpacing.base,
    top: theme.size.menuMarginTopMobile,
    'z-index': 1,
    '@media only screen and (min-width: 600px)': {
      display: 'none',
    },
  },
  mobileMenuPopupHidden: {
    display: 'none',
  },
  paper: {
    padding: theme.customSpacing.base,
    wordBreak: 'break-word',
  },
  usernameWrapper: {
    marginBottom: theme.customSpacing.small,
  },
  signOutButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
