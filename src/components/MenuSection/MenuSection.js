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
  handleOpenMenu,
  isAuthenticated,
}) {
  const classes = useStyles();

  const logout = () => {
    handleLogout();

    handleOpenMenu();
  };

  return (
    <div className={classes.menuSectionContainer}>
      {MENU_ITEMS.map(item => (
        <div className={classes.menuItem} key={item.name}>
          <Link
            className={classes.link}
            onClick={() => handleOpenMenu()}
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
                {BUTTON_LABEL.signOut}
              </Button>
            </Link>
          </div>
        ) : (
          <div className={classes.buttonGroupWrapper}>
            <div className={classes.buttonWrapper}>
              <Link className={classes.link} to={ROUTES.signin}>
                <Button
                  color="primary"
                  onClick={() => handleButtonClick(ROUTES.signin)}
                >
                  {BUTTON_LABEL.signIn}
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
                  {BUTTON_LABEL.signUp}
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
  handleOpenMenu: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default MenuSection;
