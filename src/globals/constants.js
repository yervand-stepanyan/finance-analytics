import API from '../fetchAPI';
import enterIcon from '../assets/icons/icon-enter-26x26.png';
import exitIcon from '../assets/icons/icon-exit-26x26.png';
import finance1 from '../assets/images/finance1-1760x990.png';
import finance2 from '../assets/images/finance2-1280x719.png';
import loading from '../assets/images/loading-1280x720.png';
import logo from '../assets/images/financial-analytics-48x48.png';
import signIn from '../assets/images/signIn-1760x990.png';
import signInIcon from '../assets/icons/icon-signin-24x24.png';
import signOutIcon from '../assets/icons/icon-signout-24x24.png';
import signUp from '../assets/images/signup-1760x990.png';

export const ACCOUNT_OPTION = {
  amount: 'Amount:',
  balance: 'Balance:',
  classification: 'Classification:',
  currentBalance: 'Current Balance:',
  date: 'Date:',
  documentNumber: 'Document number:',
  dueDate: 'Due date:',
  name: 'Name:',
  totalAmount: 'Total amount:',
  type: 'Type:',
};
export const BUTTON_LABEL = {
  quickbooksSignIn: 'Single Sign On',
  quickbooksSignOut: 'Sign Out',
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signUp: 'Sign Up',
};
export const GET_DATA_TYPE = {
  Accounts: accessToken => API.getAccounts(accessToken),
  Customers: accessToken => API.getCustomers(accessToken),
  Payments: accessToken => API.getPayments(accessToken),
  Invoices: accessToken => API.getInvoices(accessToken),
};
export const FIELD_LIST = [
  {
    checked: true,
    disabled: false,
    title: 'Finance',
  },
  {
    checked: false,
    disabled: true,
    title: 'Analytics',
  },
];
export const FOOTER_INFO = {
  authorName: 'Yervand Stepanyan',
  year: '2020',
};
export const ICON = {
  enter: {
    src: enterIcon,
    title: 'Enter icon',
  },
  exit: {
    src: exitIcon,
    title: 'Exit icon',
  },
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
  finance1: {
    src: finance1,
    title: 'Finance image',
  },
  finance2: {
    src: finance2,
    title: 'Finance image',
  },
  loading: {
    src: loading,
    title: 'Loading image',
  },
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
export const HOME = {
  title: 'Single Sign On implementation',
  section1:
    'Single Sign On authentication method is demonstrated in this Web application.',
  section2:
    'Finance Analytics is an application where signed in user can connect to his/her account in QuickBooks and get all needed data from there.',
  section3: 'Sign in or Sign up to enter the Finance dashboard.',
};
export const LOADER = {
  button: {
    size: 24,
    thickness: 8,
    title: 'button',
  },
  finance: {
    title: 'finance',
  },
  page: {
    size: 60,
    thickness: 4,
    title: 'page',
  },
};
export const LOCAL_STORAGE = {
  accessTokenData: 'accessTokenData',
  currentUser: 'currentUser',
  selectedTab: 'selectedTab',
};
export const PROJECT_TITLE = 'Finance Analytics';
export const QUICKBOOKS_SIGNIN = {
  title: 'You are not Signed In to QuickBooks!',
  subtitle: 'Press the button to complete Single Sign On and to see the data.',
};
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
    incorrectCredentials: 'Incorrect credentials or not Signed up yet!',
    sessionExpired: 'Session has expired! Please, Sign in again.',
    signUpSuccess: 'Signed up successfully! Sign In now to continue!',
  },
  props: {
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
    autoHideDuration: 3000,
  },
};
export const TAB_LIST = [
  { title: 'Accounts', checked: true },
  { title: 'Customers', checked: false },
  { title: 'Payments', checked: false },
  { title: 'Invoices', checked: false },
];
export const ICON_TOOLTIP_LABEL = {
  password: {
    infoMessage:
      'Minimum 10 characters,\nAt least 1 uppercase letter,\nAt least 1 lowercase letter,\nAt least 1 number,\nAt least 1 special character.',
    invalidPassword:
      'Minimum 10 characters,\nAt least 1 uppercase letter,\nAt least 1 lowercase letter,\nAt least 1 number,\nAt least 1 special character.',
  },
  username: {
    infoMessage: 'Your email address!',
    invalidEmail: 'Incorrect email format!',
  },
};
