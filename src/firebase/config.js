import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCfGknsCJLra-sZ-vTgNsnBsX_TRwQ18_w', //done
    authDomain: 'fir-xtest.firebaseapp.com', // done but not confirm
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'your-project-id-1234',
    storageBucket: 'your-project-id-1234.appspot.com',
    messagingSenderId: '565072451105', //done
    appId: '1:565072451105:android:2d041a5f737b894fa2f560', //done
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };