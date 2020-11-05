import login from '../assets/images/login-1760x990.png';
import logo from '../assets/images/financial-analytics-48x48.png';
import ROUTES from '../routes';

export const BUTTON_LABEL = {
  login: 'Login',
  logout: 'Logout',
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
    title: 'Login image',
  },
};
export const LOGIN_SECTION = {
  title: 'Log In',
  placeholder: {
    username: 'example@mail.com',
    password: 'Password',
  },
};
export const MENU_ITEMS = [
  {
    name: 'Dashboard',
    route: ROUTES.dashboard,
  },
];
export const PROJECT_TITLE = 'Finance Analytics';
