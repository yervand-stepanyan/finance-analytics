import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
  BUTTON_LABEL,
  IMAGE,
  MENU_ITEMS,
  PROJECT_TITLE,
} from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Header.style';

function Header({ handleLogout, handleRoute, isAuthenticated }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isRoute = pathname === ROUTES.login || pathname === ROUTES.signup;

  const handleButtonClick = routeTo => {
    handleRoute(routeTo);
  };

  return (
    <div className={isRoute ? classes.noHeader : ''}>
      <AppBar className={classes.headerContainer} position="static">
        <Toolbar>
          <div className={classes.headerContentWrapper}>
            <Link className={classes.link} to={ROUTES.home}>
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
              {MENU_ITEMS.map(item => (
                <div className={classes.menuItem} key={item.name}>
                  <Link className={classes.link} to={item.route}>
                    <Typography
                      className={classes.menuItemText}
                      variant="subtitle1"
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </div>
              ))}
              <div className={classes.buttonGroupWrapper}>
                <div className={classes.buttonWrapper}>
                  {isAuthenticated ? (
                    <Link className={classes.link} to={ROUTES.home}>
                      <Button
                        color="primary"
                        onClick={handleLogout}
                        variant="contained"
                      >
                        {BUTTON_LABEL.logout}
                      </Button>
                    </Link>
                  ) : (
                    <Link className={classes.link} to={ROUTES.login}>
                      <Button
                        color="primary"
                        onClick={() => handleButtonClick(ROUTES.login)}
                      >
                        {BUTTON_LABEL.login}
                      </Button>
                    </Link>
                  )}
                </div>
                <div className={classes.buttonWrapper}>
                  <Link className={classes.link} to={ROUTES.signup}>
                    <Button
                      color="primary"
                      onClick={() => handleButtonClick(ROUTES.signup)}
                      variant="contained"
                    >
                      {BUTTON_LABEL.signup}
                    </Button>
                  </Link>
                </div>
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
  handleRoute: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
