import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dashboardBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'inherit',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
    },
  },
  contentWrapper: {
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} 0`,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      padding: theme.customSpacing.base,
    },
  },
  tabAndCardsWrapper: {},
  tabBarContainer: {
    backgroundColor: theme.color.tabBarBackgroundColor,
    '@media only screen and (min-width: 600px)': {
      borderRadius: theme.border.borderRadius,
    },
  },
  tabBarWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'default',
    height: theme.size.tabHeight,
    'overflow-x': 'auto',
    '@media only screen and (min-width: 600px)': {
      justifyContent: 'space-around',
    },
  },
  tabWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `${theme.border.tabBorder.size} solid transparent`,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: `${theme.border.tabBorder.size} solid transparent`,
    boxSizing: 'border-box',
    color: theme.color.tabNotSelectedColor,
    cursor: 'pointer',
    height: 'inherit',
    outline: 'none',
    padding: `0 ${theme.customSpacing.small}`,
  },
  checkedTab: {
    color: theme.color.titleTextColor,
    borderBottom: `${theme.border.tabBorder.size} solid ${theme.color.primaryColor}`,
  },
}));
