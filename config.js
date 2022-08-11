import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB8dVKlvJ1jP6ej0W-PytqpkukZZSFYQ48",
  authDomain: "e-library-5e927.firebaseapp.com",
  projectId: "e-library-5e927",
  storageBucket: "e-library-5e927.appspot.com",
  messagingSenderId: "887800234736",
  appId: "1:887800234736:web:a65d3fff55d44225c7b835",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
