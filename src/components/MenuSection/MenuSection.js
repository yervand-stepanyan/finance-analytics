import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABEL, MENU_ITEMS } from '../../globals/constants';
import ROUTES from '../../routes';

import { useStyles } from './MenuSection.style';

function MenuSection({
  handleButtonClick,
  handleLogout,
  handleMenu,
  isAuthenticated,
}) {
  const classes = useStyles();

  const logout = () => {
    handleLogout();

    handleMenu();
  };

  return (
    <div className={classes.menuSectionContainer}>
      {MENU_ITEMS.map(item => (
        <div className={classes.menuItem} key={item.name}>
          <Link
            className={classes.link}
            onClick={() => handleMenu()}
            to={item.route}
          >
            <Typography className={classes.menuItemText} variant="subtitle1">
              {item.name}
            </Typography>
          </Link>
        </div>
      ))}
      <div>
        {isAuthenticated ? (
          <div className={classes.buttonWrapper}>
            <Link className={classes.link} to={ROUTES.home}>
              <Button color="primary" onClick={logout} variant="contained">
                {BUTTON_LABEL.logout}
              </Button>
            </Link>
          </div>
        ) : (
          <div className={classes.buttonGroupWrapper}>
            <div className={classes.buttonWrapper}>
              <Link className={classes.link} to={ROUTES.login}>
                <Button
                  color="primary"
                  onClick={() => handleButtonClick(ROUTES.login)}
                >
                  {BUTTON_LABEL.login}
                </Button>
              </Link>
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
        )}
      </div>
    </div>
  );
}

MenuSection.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default MenuSection;
