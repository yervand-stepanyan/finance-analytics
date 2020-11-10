import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { useStyles } from './MenuButton.style';

function MenuButton({ buttonLabel, imgAlt, imgSrc, routeTo, onClickHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.menuButtonContainer}>
      <Link className={classes.link} to={routeTo}>
        <Button
          color="primary"
          endIcon={(
            <Icon>
              <img
                alt={imgAlt}
                className={classes.buttonIconImage}
                src={imgSrc}
              />
            </Icon>
          )}
          onClick={onClickHandler}
          size="small"
        >
          {buttonLabel}
        </Button>
      </Link>
    </div>
  );
}

MenuButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  routeTo: PropTypes.string.isRequired,
};

export default MenuButton;
