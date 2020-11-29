import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './TooltipIconComponent.style';

function TooltipIconComponent({
  errorMessageTitle,
  handleShowErrorTooltip,
  handleShowInfoTooltip,
  infoMessageTitle,
  isCheck,
  isError,
  openErrorTooltip,
  openInfoTooltip,
}) {
  const classes = useStyles();

  return (
    <>
      {isError ? (
        <div className={classes.iconWrapper}>
          <Tooltip
            arrow
            classes={{
              arrow: classes.errorIconArrow,
              tooltip: classes.errorIconTooltip,
            }}
            open={openErrorTooltip}
            title={errorMessageTitle}
            TransitionComponent={Zoom}
          >
            <IconButton
              className={classes.errorIcon}
              onClick={handleShowErrorTooltip}
            >
              <ErrorIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <div
          className={isCheck ? classes.checkIconWrapper : classes.iconWrapper}
        >
          {isCheck ? (
            <CheckCircleIcon className={classes.checkIcon} />
          ) : (
            <Tooltip
              arrow
              color="primary"
              classes={{
                arrow: classes.infoIconArrow,
                tooltip: classes.infoIconTooltip,
              }}
              open={openInfoTooltip}
              title={infoMessageTitle}
              TransitionComponent={Zoom}
            >
              <IconButton
                className={classes.infoIcon}
                onClick={handleShowInfoTooltip}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
}

TooltipIconComponent.propTypes = {
  errorMessageTitle: PropTypes.string.isRequired,
  handleShowErrorTooltip: PropTypes.func.isRequired,
  handleShowInfoTooltip: PropTypes.func.isRequired,
  infoMessageTitle: PropTypes.string.isRequired,
  isCheck: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  openErrorTooltip: PropTypes.bool.isRequired,
  openInfoTooltip: PropTypes.bool.isRequired,
};

export default TooltipIconComponent;
