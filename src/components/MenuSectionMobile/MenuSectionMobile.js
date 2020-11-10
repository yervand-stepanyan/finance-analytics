import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import { BUTTON_LABEL, ICON } from '../../globals/constants';
import MenuButton from '../MenuButton';
import ROUTES from '../../routes';
import UsernameBlock from '../UsernameBlock';
import { useStyles } from './MenuSectionMobile.style';

function MenuSectionMobile({ handleOpenMenu, signOut, username }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {username ? (
        <div>
          <div className={classes.usernameWrapper}>
            <UsernameBlock username={username} />
          </div>
          <div className={classes.signOutButtonWrapper}>
            <MenuButton
              buttonLabel={BUTTON_LABEL.signOut}
              imgAlt={ICON.signOut.title}
              imgSrc={ICON.signOut.src}
              onClickHandler={signOut}
              routeTo={ROUTES.home}
            />
          </div>
        </div>
      ) : (
        <MenuButton
          buttonLabel={BUTTON_LABEL.signIn}
          imgAlt={ICON.signIn.title}
          imgSrc={ICON.signIn.src}
          onClickHandler={() => handleOpenMenu(false)}
          routeTo={ROUTES.signin}
        />
      )}
    </Paper>
  );
}

MenuSectionMobile.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  username: PropTypes.string,
};

MenuSectionMobile.defaultProps = {
  username: undefined,
};

export default MenuSectionMobile;
