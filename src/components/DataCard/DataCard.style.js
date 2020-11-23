import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dataCardContainer: {
    backgroundColor: theme.color.cardBackgroundColor,
    margin: theme.customSpacing.small,
    minWidth: theme.size.cardWidth,
  },
  contentWrapper: {
    display: 'flex',
  },
  valueContentWrapper: {
    marginLeft: theme.customSpacing.base,
  },
}));
