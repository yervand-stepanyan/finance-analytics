import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../Home';
import Login from '../Login';
import Dashboard from '../Dashboard';
import ROUTES from '../../routes';
import { useStyles } from './Main.style';
import ProtectedRoute from '../../components/ProtectedRoute';

function Main() {
  const classes = useStyles();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [route, setRoute] = useState(ROUTES.home);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRoute = routeTo => {
    setRoute(routeTo);
  };

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Header
          handleLogout={handleLogout}
          handleRoute={handleRoute}
          isAuthenticated={isAuthenticated}
          route={route}
        />
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home
              handleLogout={handleLogout}
              handleRoute={handleRoute}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route path={ROUTES.login}>
            <Login handleLogin={handleLogin} handleRoute={handleRoute} />
          </Route>
          <ProtectedRoute
            component={Dashboard}
            isAuthenticated={isAuthenticated}
            path={ROUTES.dashboard}
          />
        </Switch>
        <Footer route={route} />
      </Router>
    </div>
  );
}

export default Main;
