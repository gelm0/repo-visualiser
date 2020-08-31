var axios = require('axios');

export default function(req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token?'
  const CLIENT_ID = '55b054e06b5f27004297'
  const CLIENT_SECRET = 'bdee2d0cd0cf7b73a886aa6c6e6ceb604fb6b957'
  const encodedRequestParams = req.url.substring(2)

  const requestParam = new URLSearchParams(encodedRequestParams);

  const params = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: requestParam.get('code')
    }).toString();

  axios.post(GITHUB_AUTH_ACCESSTOKEN_URL + params)
  .then(function (response) {
    console.log('Success')
    console.log(response)
    console.log(response.data)
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
 });
}
