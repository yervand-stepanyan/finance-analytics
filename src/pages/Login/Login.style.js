import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  loginContainer: {
    minHeight: 'inherit',
    padding: `0 ${theme.customSpacing.base}`,
  },
}));
