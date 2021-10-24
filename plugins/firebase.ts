import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = () => {
  return {
    apiKey: "AIzaSyBReaUAX4kfJdavmRarpkPuefBoR5v9LQ0",
    authDomain: "rating-for-dp.firebaseapp.com",
    projectId: "rating-for-dp",
    storageBucket: "rating-for-dp.appspot.com",
    messagingSenderId: "197437362752",
    appId: "1:197437362752:web:daa673f7feef2e6f8205a5",
    measurementId: "G-PQV8BFDK8Z"
  }
}

if (!firebase.apps.length) {
  const config = firebaseConfig()
  firebase.initializeApp(config)
  // if (process.browser) {
  // }
}

const firestore = firebase.firestore()

export { firebase, firestore }
