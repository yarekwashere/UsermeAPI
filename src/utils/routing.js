import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const parseRoute = (route, params = {}) =>
  route
    .replace(
      /:([^/?]+)\??/g,
      (value, item) => params[item] || (/\?$/.test(value) ? '' : value),
    )
    .replace(/\/+$/g, '');

export default history;
