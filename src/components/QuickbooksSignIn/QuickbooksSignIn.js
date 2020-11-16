import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABEL, QUICKBOOKS_SIGNIN } from '../../globals/constants';
import { useStyles } from './QuickbooksSignIn.style';

function QuickbooksSignIn({ handleQuickbooksSignIn }) {
  const classes = useStyles();

  return (
    <div className={classes.quickbooksSignInContainer}>
      <div>
        <div className={classes.titleWrapper}>
          <Typography variant="h4">{QUICKBOOKS_SIGNIN.title}</Typography>
        </div>
        <div className={classes.subtitleWrapper}>
          <Typography variant="h5">{QUICKBOOKS_SIGNIN.subtitle}</Typography>
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          color="primary"
          onClick={handleQuickbooksSignIn}
          size="large"
          variant="contained"
        >
          {BUTTON_LABEL.quickbooksSignIn}
        </Button>
      </div>
    </div>
  );
}

QuickbooksSignIn.propTypes = {
  handleQuickbooksSignIn: PropTypes.func.isRequired,
};

export default QuickbooksSignIn;
