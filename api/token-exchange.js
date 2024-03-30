function exchangeCodeForToken(authCode) {
    return("I_AM_AN_ACCESS_TOKEN_12345")
}

module.exports = function(app){
    app.post('/token-exchange', (req, res) => {
      if (!req.body.get('code')){
        return res.status(422).send({error: 'Missing authorization code'})
      }
      const accessToken = exchangeCodeForToken(req.body.code)
      return res.status(200).send({accessToken: accessToken})
    })
}
