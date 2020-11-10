import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
