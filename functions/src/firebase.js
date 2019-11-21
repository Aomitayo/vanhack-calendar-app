const firebase = require('firebase')

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAmLUV_yWUqQUsiItS3pTCQNKNR4bAs3Lc',
  authDomain: 'vanhack-calendar-b86f3.firebaseapp.com',
  databaseURL: 'https://vanhack-calendar-b86f3.firebaseio.com',
  projectId: 'vanhack-calendar-b86f3',
  storageBucket: 'vanhack-calendar-b86f3.appspot.com',
  messagingSenderId: '1034209999931',
  appId: '1:1034209999931:web:788a6e2b9926a10e10301e'
})

module.exports = firebaseApp
