import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTES from '../../routes';

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.signin, state: { from: location } }}
          />
        )}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
