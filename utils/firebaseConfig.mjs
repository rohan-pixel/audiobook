
import firebase from "firebase/compat/app";
import { getDatabase } from "@firebase/database";
import 'firebase/compat/storage';

const firebaseConfig = {
      apiKey: 'AIzaSyBzCSm-xxxxxxxxxxxxxxxxxx',
      authDomain: 'xxxxxxxxxxxxxx.firebaseapp.com',
      databaseURL: 'https://xxxxxxxxxxxxxxxxxxxx.asia-southeast1.firebasedatabase.app',
      projectId: 'xxxxxxxxxxxxxx',
      storageBucket: 'xxxxxxxxxxxxxxxxx.appspot.com',
      messagingSenderId:'xxxxxx7035',
      appId: '1:xxxxxxxxxxxx:android:xxxxxxxxxxxxxx882e',
}

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db, firebase }



