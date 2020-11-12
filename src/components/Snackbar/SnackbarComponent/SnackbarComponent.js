import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';

import Alert from '../Alert';
import { SNACKBAR } from '../../../globals/constants';

function SnackbarComponent({
  isSnackbarSuccess,
  onClose,
  openSnackbar,
  snackbarText,
}) {
  return (
    <Snackbar
      anchorOrigin={SNACKBAR.props.anchorOrigin}
      autoHideDuration={SNACKBAR.props.autoHideDuration}
      onClose={onClose}
      open={openSnackbar}
    >
      {isSnackbarSuccess ? (
        <Alert onClose={onClose} severity="success">
          {snackbarText}
        </Alert>
      ) : (
        <Alert severity="error">{snackbarText}</Alert>
      )}
    </Snackbar>
  );
}

SnackbarComponent.propTypes = {
  isSnackbarSuccess: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openSnackbar: PropTypes.bool.isRequired,
  snackbarText: PropTypes.string.isRequired,
};

export default SnackbarComponent;
