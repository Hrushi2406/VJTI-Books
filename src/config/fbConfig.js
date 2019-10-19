import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAK_suGDtnRs440xh-f-nRBGvmrU9PERmI",
    authDomain: "vjti-books.firebaseapp.com",
    databaseURL: "https://vjti-books.firebaseio.com",
    projectId: "vjti-books",
    storageBucket: "gs://vjti-books.appspot.com/",
    messagingSenderId: "905780471837",
    appId: "1:905780471837:web:9e481d21e20c1e94"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase