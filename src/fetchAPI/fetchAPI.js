import QueryString from 'query-string';

const getCurrentUserURL = `${process.env.REACT_APP_ROOT_API}/api/v1/users/current`;
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
      authorization: `Basic ${process.env.REACT_APP_CLIENT_SECRET}`,
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

const API = {
  getCurrentUser: accessToken =>
    requestUser({
      url: getCurrentUserURL,
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
};

export default API;
