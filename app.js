const path = require('path');
const express = require('express')
const app = express()
const port = 3000

require('./api/token-exchange')(app)

// View Engine Setup 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})
app.get('/scopes', (req, res) => {
  res.sendFile(path.join(__dirname, 'scopes.html'));
})

app.get('/auth-code', (req, res) => {
  return res.send('i_am_an_authorization_code_12345');
})

app.post('/token-exchange', (req, res) => {
  if (!req.body.get('code')){
    return res.status(422).send({error: 'Missing authorization code'})
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})