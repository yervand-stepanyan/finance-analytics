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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleOpenMobileMenu = isOpen => {
    if (isOpen !== undefined) {
      setIsMobileMenuOpen(isOpen);
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const handleOpenUserMenu = isOpen => {
    if (isOpen !== undefined) {
      setIsUserMenuOpen(isOpen);
    } else {
      setIsUserMenuOpen(!isUserMenuOpen);
    }
  };

  const handleHomeClick = () => {
    handleOpenMobileMenu(false);
    handleOpenUserMenu(false);
  };

  const handleCurrentUser = user => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    handleOpenUserMenu(false);
    handleOpenMobileMenu(false);
  };

  return (
    <div className={classes.mainContainer}>
      <Router>
        <ScrollToTop>
          <Header
            currentUser={currentUser}
            handleHomeClick={handleHomeClick}
            handleOpenMobileMenu={handleOpenMobileMenu}
            handleOpenUserMenu={handleOpenUserMenu}
            handleSignOut={handleSignOut}
            isMobileMenuOpen={isMobileMenuOpen}
            isUserMenuOpen={isUserMenuOpen}
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
              currentUser={currentUser}
              path={ROUTES.dashboard}
            />
          </Switch>
          <Footer
            handleOpenMobileMenu={handleOpenMobileMenu}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default Main;
