import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    minHeight: 'inherit',
    padding: `0 ${theme.customSpacing.base}`,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '65vh',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  inputSectionWrapper: {
    minHeight: 'inherit',
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
    minHeight: 'inherit',
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
  buttonWrapper: {
    marginBottom: theme.customSpacing.large,
  },
  signupWrapper: {
    display: 'flex',
    justifyContent: 'center',
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
