const path = require('path');
const express = require('express')
const app = express()
const port = 3000

// View Engine Setup 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})
app.get('/scopes', (req, res) => {
  res.sendFile(path.join(__dirname, 'scopes.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})