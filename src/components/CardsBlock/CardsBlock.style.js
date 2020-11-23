import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardsBlockContainer: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.color.tabBarBackgroundColor,
    marginTop: theme.customSpacing.base,
    minHeight: 'inherit',
    padding: theme.customSpacing.small,
    '@media only screen and (min-width: 600px)': {
      borderRadius: theme.border.borderRadius,
      padding: theme.customSpacing.small,
    },
  },
}));
