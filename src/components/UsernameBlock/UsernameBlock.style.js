import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  usernameBlockContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  usernameWrapper: {
    color: theme.color.mainTextColor,
  },
  userIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
  },
}));
