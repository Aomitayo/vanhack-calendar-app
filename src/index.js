import * as firebase from 'firebase/app'
import 'firebase/firestore'

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

firebase.initializeApp({
  apiKey: 'AIzaSyAmLUV_yWUqQUsiItS3pTCQNKNR4bAs3Lc',
  authDomain: 'vanhack-calendar-b86f3.firebaseapp.com',
  databaseURL: 'https://vanhack-calendar-b86f3.firebaseio.com',
  projectId: 'vanhack-calendar-b86f3',
  storageBucket: 'vanhack-calendar-b86f3.appspot.com',
  messagingSenderId: '1034209999931',
  appId: '1:1034209999931:web:788a6e2b9926a10e10301e'
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
