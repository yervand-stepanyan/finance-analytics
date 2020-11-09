import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../Dashboard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../Home';
import ROUTES from '../../routes';
import ScrollToTop from '../../components/ScrollToTop';
import Signin from '../Signin';
import Signup from '../Signup';

import { useStyles } from './Main.style';
import ProtectedRoute from '../../components/ProtectedRoute';

function Main() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = isOpen => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleCurrentUser = user => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={classes.mainContainer}>
      <Router>
        <ScrollToTop>
          <Header
            currentUser={currentUser}
            handleOpenMenu={handleOpenMenu}
            handleSignOut={handleSignOut}
            isAuthenticated={isAuthenticated}
            isMenuOpen={isMenuOpen}
          />
          <Switch>
            <Route exact path={ROUTES.home}>
              <Home />
            </Route>
            <Route path={ROUTES.signin}>
              <Signin handleCurrentUser={handleCurrentUser} />
            </Route>
            <Route path={ROUTES.signup}>
              <Signup />
            </Route>
            <ProtectedRoute
              component={Dashboard}
              isAuthenticated={isAuthenticated}
              path={ROUTES.dashboard}
            />
          </Switch>
          <Footer handleOpenMenu={handleOpenMenu} />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default Main;
