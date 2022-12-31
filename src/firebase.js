import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClQemPOQT5Y56nnVjyElL42h_dYrSR_CY",
    authDomain: "hobby-hunter-c0a22.firebaseapp.com",
    projectId: "hobby-hunter-c0a22",
    storageBucket: "hobby-hunter-c0a22.appspot.com",
    messagingSenderId: "1024529469354",
    appId: "1:1024529469354:web:55498e825342df5ac1e5d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};