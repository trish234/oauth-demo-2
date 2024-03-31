const express = require('express')
var cors = require('cors');
function exchangeCodeForToken(authCode) {
    return("I_AM_AN_ACCESS_TOKEN_12345")
}

module.exports = function(app){
    app.use(express.json());
    var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
      }
    app.use(cors(corsOptions));
    app.post('/token-exchange', (req, res) => {
      console.log("typeof req.body ", typeof req.body)
      console.log("req.body.code", req.body.code)
      if (!req.body.code){
        return res.status(422).send({error: 'Missing authorization code'})
      }
      const accessToken = exchangeCodeForToken(req.body.code)
      console.log("access token ", accessToken)
      return res.status(200).send({accessToken: accessToken})
    })
}
