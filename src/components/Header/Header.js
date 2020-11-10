import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { IMAGE, PROJECT_TITLE } from '../../globals/constants';
import MenuSectionLargeScreen from '../MenuSectionLargeScreen';
import MenuSectionMobile from '../MenuSectionMobile';
import ROUTES from '../../routes';
import { useStyles } from './Header.style';

function Header({
  currentUser,
  handleOpenMenu,
  handleOpenUserMenu,
  handleSignOut,
  isMenuOpen,
  isUserMenuOpen,
}) {
  const classes = useStyles();
  const username = currentUser?.username;
  const { pathname } = useLocation();
  const isRoute = pathname === ROUTES.signin || pathname === ROUTES.signup;

  const handleHome = () => {
    handleOpenMenu(false);
    handleOpenUserMenu(false);
  };

  const signOut = () => {
    handleSignOut();

    handleOpenMenu();
  };

  return (
    <div className={isRoute ? classes.noHeader : ''}>
      <AppBar className={classes.headerContainer} position="static">
        <Toolbar>
          <div className={classes.headerContentWrapper}>
            <Link
              className={classes.link}
              onClick={handleHome}
              to={ROUTES.home}
            >
              <div className={classes.logoAndTitleWrapper}>
                <div className={classes.logoWrapper}>
                  <img
                    alt={IMAGE.logo.title}
                    className={classes.logoImage}
                    src={IMAGE.logo.src}
                  />
                </div>
                <div className={classes.titleWrapper}>
                  <Typography variant="h6">{PROJECT_TITLE}</Typography>
                </div>
              </div>
            </Link>
            <div className={classes.menuWrapper}>
              <MenuSectionLargeScreen
                handleOpenMenu={handleOpenMenu}
                handleOpenUserMenu={handleOpenUserMenu}
                handleSignOut={handleSignOut}
                isUserMenuOpen={isUserMenuOpen}
                signOut={signOut}
                username={username}
              />
            </div>
            <div className={classes.menuButtonWrapper}>
              <div>
                <IconButton onClick={() => handleOpenMenu()}>
                  <MenuIcon />
                </IconButton>
              </div>
              <div
                className={`${
                  isMenuOpen ? classes.menuPopup : classes.menuPopupHidden
                }`}
              >
                <MenuSectionMobile
                  username={username}
                  handleOpenMenu={handleOpenMenu}
                  signOut={signOut}
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
  handleOpenMenu: PropTypes.func.isRequired,
  handleOpenUserMenu: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
