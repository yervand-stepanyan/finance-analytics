const dataURL = `${process.env.REACT_APP_ROOT_API}`;

async function request({ url, method, body }) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json',
        },
        method,
      }
    : {
        method,
      };

  const response = await fetch(url, fetchData);

  return response.json();
}

const API = {
  get: () => request({ url: dataURL, method: 'GET' }),
};

export default API;
