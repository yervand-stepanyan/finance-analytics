import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser, redirectTo } = rest;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
        )}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
