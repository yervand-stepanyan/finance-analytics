import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { IMAGE, PROJECT_TITLE } from '../../globals/constants';
import MenuSection from '../MenuSection';
import ROUTES from '../../routes';
import { useStyles } from './Header.style';

function Header({
  handleLogout,
  handleOpenMenu,
  handleRoute,
  isAuthenticated,
  isMenuOpen,
}) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isRoute = pathname === ROUTES.signin || pathname === ROUTES.signup;

  const handleButtonClick = routeTo => {
    handleRoute(routeTo);

    handleOpenMenu(false);
  };

  const handleHome = () => {
    handleOpenMenu(false);
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
              <MenuSection
                handleButtonClick={handleButtonClick}
                handleLogout={handleLogout}
                handleOpenMenu={handleOpenMenu}
                isAuthenticated={isAuthenticated}
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
                  isMenuOpen ? classes.menuPopup : classes.hideMenuPopup
                }`}
              >
                <Paper className={classes.paper}>
                  <MenuSection
                    handleButtonClick={handleButtonClick}
                    handleLogout={handleLogout}
                    handleOpenMenu={handleOpenMenu}
                    isAuthenticated={isAuthenticated}
                  />
                </Paper>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  handleRoute: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
