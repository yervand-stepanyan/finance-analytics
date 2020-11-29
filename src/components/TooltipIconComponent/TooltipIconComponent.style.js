import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  infoIcon: {
    color: `${theme.color.infoIconColor}`,
  },
  infoIconArrow: {
    color: `${theme.color.infoIconColor}`,
    fontSize: '10px',
  },
  infoIconTooltip: {
    backgroundColor: `${theme.color.infoIconColor}`,
    fontSize: '14px',
  },
  errorIcon: {
    color: `${theme.color.errorIconColor}`,
  },
  errorIconArrow: {
    color: `${theme.color.errorIconColor}`,
    fontSize: '10px',
  },
  errorIconTooltip: {
    backgroundColor: `${theme.color.errorIconColor}`,
    fontSize: '14px',
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
