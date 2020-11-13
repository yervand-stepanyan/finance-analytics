import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
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
  handleHomeClick,
  handleOpenMobileMenu,
  handleOpenUserMenu,
  handleSignOut,
  isMobileMenuOpen,
  isUserMenuOpen,
  routeToRedirect,
}) {
  const classes = useStyles();
  const username = currentUser?.username;
  const history = useHistory();
  const { pathname } = useLocation();
  const isRoute = pathname === ROUTES.signin || pathname === ROUTES.signup;

  const signOut = () => {
    handleSignOut();

    history.push(routeToRedirect);
  };

  return (
    <div className={isRoute ? classes.noHeader : classes.headerContainer}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <div className={classes.headerContentWrapper}>
            <Link
              className={classes.link}
              onClick={handleHomeClick}
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
                handleOpenMobileMenu={handleOpenMobileMenu}
                handleOpenUserMenu={handleOpenUserMenu}
                isUserMenuOpen={isUserMenuOpen}
                handleSignOut={signOut}
                username={username}
              />
            </div>
            <div className={classes.menuButtonWrapper}>
              <div>
                <IconButton onClick={() => handleOpenMobileMenu()}>
                  <MenuIcon />
                </IconButton>
              </div>
              <MenuSectionMobile
                handleOpenMobileMenu={handleOpenMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
                handleSignOut={signOut}
                username={username}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
  handleHomeClick: PropTypes.func.isRequired,
  handleOpenMobileMenu: PropTypes.func.isRequired,
  handleOpenUserMenu: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  routeToRedirect: PropTypes.string.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
