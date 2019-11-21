var express = require('express')
var router = express.Router()
const firebase = require('../firebase')
const auth = firebase.auth()
const firebaseAdmin = require('../firebase-admin')
/**
 * Login with username and password, and return the user's details including token
 */
router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  return auth.signInWithEmailAndPassword(username, password)
    .then(res.send.bind(res))
    .catch(err => {
      console.log('Login Error', err)
      res.status(400).send(err)
    })
})

module.exports = router
