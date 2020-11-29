import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  infoIcon: {
    color: `${theme.color.infoIconColor}`,
  },
  infoIconTooltip: {
    backgroundColor: `${theme.color.infoIconColor}`,
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
  },
  errorIcon: {
    color: `${theme.color.errorIconColor}`,
  },
  errorIconTooltip: {
    backgroundColor: `${theme.color.errorIconColor}`,
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
  },
  checkIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
  },
  checkIcon: {
    color: `${theme.color.checkedIconColor}`,
  },
}));
