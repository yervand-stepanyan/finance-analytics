import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import API from '../../fetchAPI';
import Finance from '../Finance';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../Home';
import { loadState, saveState } from '../../helpers/localStorage';
import { LOCAL_STORAGE } from '../../globals/constants';
import ProtectedRoute from '../../components/ProtectedRoute';
import ROUTES from '../../routes';
import ScrollToTop from '../../components/ScrollToTop';
import Signin from '../Signin';
import Signup from '../Signup';
import SnackbarComponent from '../../components/Snackbar/SnackbarComponent';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const accessTokenDataFromLocalStorage = loadState(
    LOCAL_STORAGE.accessTokenData
  );
  const currentUserFromLocalStorage = loadState(LOCAL_STORAGE.currentUser);
  const [accessTokenData, setAccessTokenData] = useState(
    accessTokenDataFromLocalStorage || null
  );
  const { accessToken } = accessTokenData || '';
  const [currentUser, setCurrentUser] = useState(
    currentUserFromLocalStorage || null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  const getUserData = async () => {
    try {
      if (accessTokenDataFromLocalStorage && currentUserFromLocalStorage) {
        const user = await API.getCurrentUser(accessToken);

        setCurrentUser(user);

        saveState(LOCAL_STORAGE.currentUser, user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleOpenMobileMenu = isOpen => {
    if (isOpen !== undefined) {
      setIsMobileMenuOpen(isOpen);

      setIsUserMenuOpen(isOpen);
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen);

      setIsUserMenuOpen(!isUserMenuOpen);
    }
  };

  const handleOpenUserMenu = isOpen => {
    if (isOpen !== undefined) {
      setIsUserMenuOpen(isOpen);

      setIsMobileMenuOpen(isOpen);
    } else {
      setIsUserMenuOpen(!isUserMenuOpen);

      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const handleHomeClick = () => {
    handleOpenMobileMenu(false);

    handleOpenUserMenu(false);
  };

  const handleCurrentUser = ({
    accessTokenData: accessTknData = accessTokenData,
    user,
  }) => {
    setCurrentUser(user);

    setAccessTokenData(accessTknData);

    saveState(LOCAL_STORAGE.accessTokenData, accessTknData);
    saveState(LOCAL_STORAGE.currentUser, user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);

    localStorage.removeItem(LOCAL_STORAGE.accessTokenData);
    localStorage.removeItem(LOCAL_STORAGE.currentUser);

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
            routeToRedirect={ROUTES.home}
          />
          <Switch>
            <Route exact path={ROUTES.home}>
              <Home currentUser={currentUser} />
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
              accessToken={accessToken}
              component={Finance}
              currentUser={currentUser}
              handleCurrentUser={handleCurrentUser}
              path={ROUTES.finance}
              redirectTo={ROUTES.signin}
            />
            <Route path="*">
              <Redirect to={ROUTES.home} />
            </Route>
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
