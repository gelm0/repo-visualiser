const axios = require('axios');

export default async function(req, res) {
  const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/access_token';
  const data = await axios.post(GITHUB_OAUTH_URL + req.url)
    .then(function (response) {
      return response.data
  })
  .catch(function (error) {
    console.error('Error ' + error.message);
 });
  res.end(data);
};
