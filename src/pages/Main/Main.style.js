import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.color.mainBodyColor,
    minHeight: '100vh',
    position: 'relative',
  },
}));
