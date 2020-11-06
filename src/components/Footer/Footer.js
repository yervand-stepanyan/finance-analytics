import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { FOOTER_INFO, IMAGE, PROJECT_TITLE } from '../../globals/constants';
import ROUTES from '../../routes';
import { useStyles } from './Footer.style';

function Footer({ handleMenu }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isRoute = pathname === ROUTES.login || pathname === ROUTES.signup;

  return (
    <footer
      className={`${classes.footerContainer} ${
        isRoute ? classes.noFooter : ''
      }`}
    >
      <div className={classes.contentContainer}>
        <div className={classes.logoAndCreatorWrapper}>
          <Link
            className={classes.link}
            onClick={() => handleMenu()}
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
          <div className={classes.creatorWrapper}>
            <Typography variant="subtitle1">
              {FOOTER_INFO.creatorName}
            </Typography>
          </div>
        </div>
        <div className={classes.yearWrapper}>
          <Typography variant="subtitle1">{FOOTER_INFO.year}</Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  handleMenu: PropTypes.func.isRequired,
};

export default Footer;
