import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import { BUTTON_LABEL, ICON } from '../../globals/constants';
import MenuButton from '../MenuButton';
import ROUTES from '../../routes';
import UsernameBlock from '../UsernameBlock';
import { useStyles } from './MenuSectionLargeScreen.style';

function MenuSectionLargeScreen({
  handleOpenMenu,
  handleOpenUserMenu,
  isUserMenuOpen,
  signOut,
  username,
}) {
  const classes = useStyles();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleOpenUserMenu();
    }
  };

  return (
    <div className={classes.menuSectionLargeScreenContainer}>
      {username ? (
        <div>
          <div
            className={classes.usernameBlockWrapper}
            onClick={() => handleOpenUserMenu()}
            onKeyPress={e => handleKeyPress(e)}
            role="button"
            tabIndex={0}
          >
            <UsernameBlock username={username} />
          </div>
          <div
            className={
              isUserMenuOpen
                ? classes.menuPopupWrapper
                : classes.menuPopupHidden
            }
          >
            <Paper className={classes.paper}>
              <MenuButton
                buttonLabel={BUTTON_LABEL.signOut}
                imgAlt={ICON.signOut.title}
                imgSrc={ICON.signOut.src}
                onClickHandler={signOut}
                routeTo={ROUTES.home}
              />
            </Paper>
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
    </div>
  );
}

MenuSectionLargeScreen.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  handleOpenUserMenu: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  username: PropTypes.string,
};

MenuSectionLargeScreen.defaultProps = {
  username: undefined,
};

export default MenuSectionLargeScreen;
