import firebase from 'firebase'

let database // will contain current environment db config.

var firebaseConfig = {
  apiKey: 'AIzaSyB0pXi3EBdc9p33uQvDMQG6SeCeuzpcHDk',
  authDomain: 'react-togglr.firebaseapp.com',
  databaseURL: 'https://react-togglr.firebaseio.com',
  projectId: 'react-togglr',
  storageBucket: 'react-togglr.appspot.com',
  messagingSenderId: '883468833586',
  appId: '1:883468833586:web:cf53cab617302ab2f87d2b',
  measurementId: 'G-NHR0E20SST'
}

database = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default database
