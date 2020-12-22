import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABEL, ICON, QUICKBOOKS_SIGNIN } from '../../globals/constants';
import { useStyles } from './QuickbooksSignIn.style';

function QuickbooksSignIn({ accessToken }) {
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
        <form
          action="https://finance-analytics-api.herokuapp.com/api/v1/finances/quick-books"
          method="post"
        >
          <input
            type="hidden"
            name="authorization"
            value={`Bearer ${accessToken}`}
          />
          <input
            type="hidden"
            name="redirectUri"
            value="http://yervand-stepanyan.github.io/finance-analytics/#/finance/signin/callback"
          />
          <Button
            color="primary"
            endIcon={(
              <Icon>
                <img
                  alt={ICON.enter.title}
                  className={classes.buttonIconImage}
                  src={ICON.enter.src}
                />
              </Icon>
            )}
            size="large"
            type="submit"
            variant="contained"
          >
            {BUTTON_LABEL.quickbooksSignIn}
          </Button>
        </form>
      </div>
    </div>
  );
}

QuickbooksSignIn.propTypes = {
  accessToken: PropTypes.string.isRequired,
};

export default QuickbooksSignIn;
