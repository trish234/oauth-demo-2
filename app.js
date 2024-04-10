const path = require('path');
const express = require('express')
const app = express()
const port = 3000

require('./api/token-exchange')(app)
require('./api/get-resource')(app)

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})
app.get('/scopes', (req, res) => {
  res.sendFile(path.join(__dirname, 'scopes.html'));
})

app.get('/auth-code', (req, res) => {
  return res.send({"authCode": 'i_am_an_authorization_code_12345'});
})

app.post('/token-exchange', (req, res) => {
  if (!req.body.get('code')){
    return res.status(422).send({error: 'Missing authorization code'})
  }
  
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})