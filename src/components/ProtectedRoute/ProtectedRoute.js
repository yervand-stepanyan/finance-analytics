import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTES from '../../routes';

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.login, state: { from: location } }}
          />
        )}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
