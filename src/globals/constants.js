import login from '../assets/images/login-1760x990.png';
import logo from '../assets/images/financial-analytics-48x48.png';
import signup from '../assets/images/signup-1760x990.png';
import ROUTES from '../routes';

export const BUTTON_LABEL = {
  login: 'Log In',
  logout: 'Log Out',
  signup: 'Sign Up',
};
export const FOOTER_INFO = {
  creatorName: 'Yervand Stepanyan',
  year: '2020',
};
export const IMAGE = {
  logo: {
    src: logo,
    title: 'Logo image',
  },
  login: {
    src: login,
    title: 'Log in image',
  },
  signup: {
    src: signup,
    title: 'Sign up image',
  },
};
export const LOGIN_SECTION = {
  placeholder: {
    username: 'example@mail.com',
    password: 'Password',
  },
  signupLabel: 'Create an account',
  title: 'Log In',
};
export const MENU_ITEMS = [
  {
    name: 'Dashboard',
    route: ROUTES.dashboard,
  },
];
export const PROJECT_TITLE = 'Finance Analytics';
export const SIGNUP_SECTION = {
  placeholder: {
    username: 'example@mail.com',
    password: 'Password',
  },
  loginLabel: 'Log in',
  title: 'Sign Up',
};
