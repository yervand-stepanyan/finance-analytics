import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dataCardContainer: {
    backgroundColor: theme.color.cardBackgroundColor,
    margin: theme.customSpacing.small,
    width: theme.size.cardWidth,
  },
  rowDataWrapper: {
    display: 'flex',
  },
  valueDataWrapper: {
    marginLeft: theme.customSpacing.base,
  },
}));
