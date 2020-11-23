import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeContainer: {
    minHeight: 'inherit',
    padding: `${theme.customSpacing.small}`,
    '@media only screen and (min-width: 600px)': {
      padding: `${theme.customSpacing.base}`,
    },
  },
  firstSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media only screen and (min-width: 600px)': {
      alignItems: 'center',
      flexDirection: 'row',
      padding: `${theme.customSpacing.xLarge}`,
    },
  },
  textContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      width: '40%',
    },
  },
  section1Wrapper: {
    marginTop: theme.customSpacing.base,
  },
  section2Wrapper: {
    marginTop: theme.customSpacing.base,
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: '80%',
    },
  },
  image: {
    width: 'inherit',
  },
  secondSectionWrapper: {
    display: 'flex',
    flexDirection: 'column-reverse',
    marginTop: theme.customSpacing.large,
    '@media only screen and (min-width: 600px)': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 0,
      padding: `0 ${theme.customSpacing.xLarge}`,
    },
  },
  image2Wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: '80%',
    },
  },
}));
