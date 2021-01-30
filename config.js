import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCoXW7tIYJhQ4JoeVDKCxR3XQa0OP0OMLQ",
  authDomain: "moneytracker-4c854.firebaseapp.com",
  projectId: "moneytracker-4c854",
  storageBucket: "moneytracker-4c854.appspot.com",
  messagingSenderId: "828377066796",
  appId: "1:828377066796:web:06d6b73145d49a816e1089"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()