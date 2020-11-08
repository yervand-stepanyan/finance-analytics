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
});
