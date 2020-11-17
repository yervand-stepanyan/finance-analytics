import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  dashboardBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'inherit',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
});
