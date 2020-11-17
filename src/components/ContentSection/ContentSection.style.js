import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  contentSectionContainer: {
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} 0`,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      padding: theme.customSpacing.base,
    },
  },
  tabAndCardsWrapper: {},
}));
