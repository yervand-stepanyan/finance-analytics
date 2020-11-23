import QueryString from 'query-string';

const getCurrentUserURL = `${process.env.REACT_APP_ROOT_API}/api/v1/users/current`;
const getDataURI = `${process.env.REACT_APP_ROOT_API}/api/v1/finances`;
const quickbooksURL = `${process.env.REACT_APP_ROOT_API}/api/v1/finances/quick-books`;
const postTokenURL = `${process.env.REACT_APP_ROOT_API}/api/v1/oauth2/token`;
const postUserURL = `${process.env.REACT_APP_ROOT_API}/api/v1/users`;

async function requestToken({ url, method, body }) {
  const fetchOptions = {
    body: QueryString.stringify({
      ...body,
      grant_type: 'password',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Basic ${process.env.REACT_APP_CLIENT}`,
    },
    method,
  };

  const response = await fetch(url, fetchOptions);

  return response.json();
}

async function requestJSON({ url, method, body }) {
  const fetchOptions = {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method,
  };

  const response = await fetch(url, fetchOptions);

  return response.json();
}

async function requestUser({ url, method, accessToken }) {
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    method,
  };

  const response = await fetch(url, fetchOptions);

  return response.json();
}

async function requestData({ uri, method, accessToken }) {
  const fetchOptions = {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    method,
  };

  const response = await fetch(`${getDataURI}${uri}`, fetchOptions);

  return response.json();
}

async function deleteQuickbooks({ url, method, accessToken }) {
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    method,
  };

  const response = await fetch(url, fetchOptions);

  return response.json();
}

const API = {
  getAccounts: accessToken =>
    requestData({
      uri: '/accounts',
      method: 'GET',
      accessToken,
    }),
  getCurrentUser: accessToken =>
    requestUser({
      url: getCurrentUserURL,
      method: 'GET',
      accessToken,
    }),
  getCustomers: accessToken =>
    requestData({
      uri: '/customers',
      method: 'GET',
      accessToken,
    }),
  getInvoices: accessToken =>
    requestData({
      uri: '/invoices',
      method: 'GET',
      accessToken,
    }),
  getPayments: accessToken =>
    requestData({
      uri: '/payments',
      method: 'GET',
      accessToken,
    }),
  postToken: body =>
    requestToken({
      url: postTokenURL,
      method: 'POST',
      body,
    }),
  postUser: body => requestJSON({ url: postUserURL, method: 'POST', body }),
  removeQuickbooks: accessToken =>
    deleteQuickbooks({
      url: quickbooksURL,
      method: 'DELETE',
      accessToken,
    }),
};

export default API;
