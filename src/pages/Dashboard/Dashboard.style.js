import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    minHeight: 'inherit',
    padding: `0 ${theme.customSpacing.base}`,
  },
}));
