import React from 'react';
import { Link } from 'react-router-dom';
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

function Header({ handleLogout, isAuthenticated }) {
  const classes = useStyles();

  return (
    <div>
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
              {isAuthenticated ? (
                <Link className={classes.link} to={ROUTES.home}>
                  <div>
                    <Button
                      color="primary"
                      onClick={handleLogout}
                      variant="contained"
                    >
                      {BUTTON_LABEL.logout}
                    </Button>
                  </div>
                </Link>
              ) : (
                <Link className={classes.link} to={ROUTES.login}>
                  <div>
                    <Button color="primary" variant="contained">
                      {BUTTON_LABEL.login}
                    </Button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
