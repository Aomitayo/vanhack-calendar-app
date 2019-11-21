const admin = require('firebase-admin')
const hooks = require('hooks')

/*
admin.initializeApp({
  apiKey: 'AIzaSyAmLUV_yWUqQUsiItS3pTCQNKNR4bAs3Lc',
  authDomain: 'vanhack-calendar-b86f3.firebaseapp.com',
  databaseURL: 'https://vanhack-calendar-b86f3.firebaseio.com',
  projectId: 'vanhack-calendar-b86f3',
  storageBucket: 'vanhack-calendar-b86f3.appspot.com',
  messagingSenderId: '1034209999931',
  appId: '1:1034209999931:web:788a6e2b9926a10e10301e'
})
*/
const serviceCredentials = require('../../vanhack-calendar-b86f3-b90f261d44f0.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceCredentials)
})

const auth = admin.auth()

const users = {
  candidate: { username: 'john.candidate@example.com', password: 'john.candidate' },
  premiumCandidate: { username: 'jason.platinum@workplace.com', password: 'jason.platinum' },
  staff: { username: 'tiago.cto@vanhack.com', password: 'tiago.cto' }
}

let userRecords = []
var stash = {}

hooks.beforeAll((transactions, done) => {
  Promise.all(
    Object.entries(users).map(([role, { username, password }]) => {
      return auth.getUserByEmail(username)
        .catch(error => {
          return error.code === 'auth/user-not-found'
            ? auth.createUser({
              email: username,
              password: password,
              emailVerified: true
            })
            : Promise.reject(error)
        })
    })
  ).then(users => {
    userRecords = users
  }).catch(errors => {
    errors.forEach(e => hooks.log(e))
    done(errors)
  }).finally(done)
})

hooks.afterAll((transactions, done) => {
  Promise.all(
    userRecords.map((userRecord) => {
      return auth.deleteUser(userRecord.uid)
    })
  ).then(users => {
    userRecords = []
  }).catch(errors => {
    errors.forEach(e => hooks.log(e))
  }).finally(done)
})

hooks.after('/api/auth/login > POST', transaction => {
  console.log(transaction.real.body)
  stash.token = JSON.parse(transaction.real.body).token
})

hooks.beforeEach(transaction => {
  if (stash.token) {
    transaction.request.headers['authorization'] = 'bearer ' + stash.token
  }
})
