var axios = require('axios');

export default function(req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CLIENT_ID = '123'
  const CLIENT_SECRET = '456789'
  const CODE='123';
  //console.log(req.query)
  //const CODE = req.query.code

console.log("123123123")
  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODE
    }
  })
  .then(function (response) {
  	res.redirect('http://myjsapp/' + response.data)
    console.log('Success ' + response)
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
 });
}
