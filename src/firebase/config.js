import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAj_C6AadI-ajUbVRtAGf8Q7jlI7HfZ058",
    authDomain: "fir-xtest.firebaseapp.com",
    databaseURL: "https://fir-xtest-default-rtdb.firebaseio.com",
    projectId: "fir-xtest",
    storageBucket: "fir-xtest.appspot.com",
    messagingSenderId: "565072451105",
    appId: "1:565072451105:web:af35fc5c401fd9fca2f560"
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };