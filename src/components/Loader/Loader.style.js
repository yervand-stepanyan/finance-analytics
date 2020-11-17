import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  pageLoaderContainer: {
    textAlign: 'center',
    marginTop: '30vh',
    minHeight: 200,
  },
  imageLoaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    paddingTop: '30%',
    '@media only screen and (min-width: 600px)': {
      alignItems: 'center',
      paddingTop: 0,
    },
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '90%',
    '@media only screen and (min-width: 600px)': {
      height: '80%',
      width: '80%',
    },
  },
  image: {
    width: 'inherit',
  },
});
