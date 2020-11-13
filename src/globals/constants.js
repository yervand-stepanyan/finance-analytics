import logo from '../assets/images/financial-analytics-48x48.png';
import signIn from '../assets/images/signIn-1760x990.png';
import signInIcon from '../assets/icons/icon-signin-24x24.png';
import signOutIcon from '../assets/icons/icon-signout-24x24.png';
import signUp from '../assets/images/signup-1760x990.png';
import ROUTES from '../routes';

export const BUTTON_LABEL = {
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signUp: 'Sign Up',
};
export const FIELD_LIST = [
  {
    name: 'Finance',
    checked: true,
  },
];
export const FOOTER_INFO = {
  creatorName: 'Yervand Stepanyan',
  year: '2020',
};
export const ICON = {
  signIn: {
    src: signInIcon,
    title: 'Sign in icon',
  },
  signOut: {
    src: signOutIcon,
    title: 'Sign out icon',
  },
};
export const IMAGE = {
  logo: {
    src: logo,
    title: 'Logo image',
  },
  signIn: {
    src: signIn,
    title: 'Sign In image',
  },
  signUp: {
    src: signUp,
    title: 'Sign Up image',
  },
};
export const LOADER = {
  button: {
    size: 24,
    thickness: 8,
    title: 'button',
  },
  page: {
    size: 60,
    thickness: 4,
    title: 'page',
  },
};
export const MENU_ITEMS = [
  {
    name: 'Dashboard',
    route: ROUTES.dashboard,
  },
];
export const PROJECT_TITLE = 'Finance Analytics';
export const SIGN_IN_SECTION = {
  placeholder: {
    username: 'example@mail.com',
    password: 'Password',
  },
  signupLabel: "Don't have an account?",
  signupLink: 'Sign Up',
  title: 'Sign In',
};
export const SIGN_UP_SECTION = {
  placeholder: {
    username: 'example@mail.com',
    password: 'Password',
  },
  signInLabel: 'Have an account?',
  signInLink: 'Sign In now',
  title: 'Sign Up',
};
export const SNACKBAR = {
  message: {
    signUpSuccess: 'Signed up successfully! Sign In now to continue!',
  },
  props: {
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
    autoHideDuration: 3000,
  },
};
