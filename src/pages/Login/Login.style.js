import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  loginContainer: {
    minHeight: 'inherit',
    padding: `${theme.customSpacing.xLarge} ${theme.customSpacing.base} 0`,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '65vh',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  inputSectionWrapper: {
    height: 'inherit',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: '40%',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: ' border-box',
    height: 'inherit',
    padding: `${theme.customSpacing.large}`,
    '@media only screen and (min-width: 600px)': {
      padding: `${theme.customSpacing.large} ${theme.customSpacing.xxLarge}`,
    },
  },
  titleWrapper: {
    marginBottom: theme.customSpacing.large,
  },
  usernameWrapper: {
    marginBottom: theme.customSpacing.midLarge,
  },
  passwordWrapper: {
    marginBottom: theme.customSpacing.large,
  },
  imageSectionWrapper: {
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: '60%',
    },
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    width: 'inherit',
  },
}));
