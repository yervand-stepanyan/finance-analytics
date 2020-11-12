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
import SnackbarComponent from '../../components/Snackbar/SnackbarComponent';

function Main() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

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

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarContent = (isSuccess, text) => {
    setIsSnackbarSuccess(isSuccess);

    setSnackbarText(text);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
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
              <Signup
                handleOpenSnackbar={handleOpenSnackbar}
                handleSnackbarContent={handleSnackbarContent}
              />
            </Route>
            <ProtectedRoute
              component={Dashboard}
              currentUser={currentUser}
              path={ROUTES.dashboard}
              redirectTo={ROUTES.signin}
            />
          </Switch>
          <Footer
            handleOpenMobileMenu={handleOpenMobileMenu}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        </ScrollToTop>
      </Router>
      <SnackbarComponent
        isSnackbarSuccess={isSnackbarSuccess}
        onClose={handleClose}
        openSnackbar={openSnackbar}
        snackbarText={snackbarText}
      />
    </div>
  );
}

export default Main;
