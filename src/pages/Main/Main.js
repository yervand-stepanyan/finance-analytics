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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Header handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route path={ROUTES.login}>
            <Login handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            component={Dashboard}
            isAuthenticated={isAuthenticated}
            path={ROUTES.dashboard}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
