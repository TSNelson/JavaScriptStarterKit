
const prodAPI_URL = 'https://peaceful-lowlands-02993.herokuapp.com/'

export default function getBaseUrl() {
  // Set to use url for mock api if hosted locally:
  // const inDevelopment = window.location.hostname === 'localhost';
  // return inDevelopment ? 'http://localhost:3001/' : '/'

  // Toggle use of mock api by adding the query string ../?useMockApi=true
  return getParameterByName('useMockApi') ? 'http://localhost:3001/' : prodAPI_URL;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line no-useless-escape
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
