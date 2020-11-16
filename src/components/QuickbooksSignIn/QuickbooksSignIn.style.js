import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  quickbooksSignInContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'inherit',
    padding: `${theme.customSpacing.xxxLarge} ${theme.customSpacing.base}`,
    textAlign: 'center',
    '@media only screen and (min-width: 600px)': {},
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
