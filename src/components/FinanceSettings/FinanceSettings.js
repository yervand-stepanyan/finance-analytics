import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';

import { BUTTON_LABEL, ICON } from '../../globals/constants';
import { useStyles } from './FinanceSettings.style';

function FinanceSettings({
  handleQuickbooksSignOut,
  handleShowSignOutPopup,
  showSignOutPopup,
}) {
  const classes = useStyles();

  return (
    <div className={classes.financeSettingsContainer}>
      <div>
        <IconButton onClick={handleShowSignOutPopup}>
          <SettingsIcon />
        </IconButton>
      </div>
      <div
        className={`${
          showSignOutPopup ? classes.signOutPopup : classes.signOutPopupHidden
        }`}
      >
        <Paper className={classes.paper}>
          <Button
            color="primary"
            endIcon={(
              <Icon>
                <img
                  alt={ICON.exit.title}
                  className={classes.buttonIconImage}
                  src={ICON.exit.src}
                />
              </Icon>
            )}
            onClick={handleQuickbooksSignOut}
          >
            {BUTTON_LABEL.quickbooksSignOut}
          </Button>
        </Paper>
      </div>
    </div>
  );
}

FinanceSettings.propTypes = {
  handleQuickbooksSignOut: PropTypes.func.isRequired,
  handleShowSignOutPopup: PropTypes.func.isRequired,
  showSignOutPopup: PropTypes.bool.isRequired,
};

export default FinanceSettings;
