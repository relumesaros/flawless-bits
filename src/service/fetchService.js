import queryString from 'query-string';

const methods = {
  post: 'POST',
  get: 'GET',
};

const makeRequest = async ({ url, body, queryStrings, method }) => {
  const queryStringsEncoded = queryString.stringify(queryStrings);
  const urlWithQueryStrings = `${url}?${queryStringsEncoded}`;
  const request = {
    method,
    headers: {
      Accept: 'application/json',
    },
  };
  if (body) {
    request.body = JSON.stringify(body);
    request.headers['Content-Type'] = 'application/json';
  }
  const response = await fetch(urlWithQueryStrings, request);

  const responseJson = await response.json();
  if (response.status === 500) {
    console.error(responseJson.error);
  }
  return responseJson;
};

export default {
  post: (url, body, queryStrings) =>
    makeRequest({ url, body, queryStrings, method: methods.post }),
};
