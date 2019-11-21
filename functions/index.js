const functions = require('firebase-functions')
const api = require('./src/app')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*
exports.api = functions.https.onRequest((request, response) => {
  response.send({ message: 'Hello from Firebase!' })
})
*/

exports.api = functions.https.onRequest(api)
