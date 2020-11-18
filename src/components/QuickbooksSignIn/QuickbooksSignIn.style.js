import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  quickbooksSignInContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.xxxLarge} ${theme.customSpacing.base} 0`,
    textAlign: 'center',
    '@media only screen and (min-width: 600px)': {
      width: '100%',
    },
  },
  titleWrapper: {
    color: theme.color.titleTextColor,
  },
  subtitleWrapper: {
    color: theme.color.mainTextColor,
    marginTop: theme.customSpacing.base,
  },
  buttonWrapper: {
    marginTop: theme.customSpacing.xLarge,
  },
}));
