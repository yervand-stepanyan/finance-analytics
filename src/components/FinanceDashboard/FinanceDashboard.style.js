import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  financeDashboardContainer: {
    boxSizing: 'border-box',
    padding: 0,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      padding: `0 ${theme.customSpacing.base} ${theme.customSpacing.base}`,
    },
  },
  tabBarAndCardsBlockWrapper: {
    minHeight: '60vh',
  },
}));
