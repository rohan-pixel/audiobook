
import firebase from "firebase/compat/app";
import { getDatabase } from "@firebase/database";
import 'firebase/compat/storage';

const firebaseConfig = {
      apiKey: 'AIzaSyBzCSm-8zPX8mBg0JIWbiPsVihWApFwHdo',
      authDomain: 'hindu-fm-2024.firebaseapp.com',
      databaseURL: 'https://hindu-fm-2024-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'hindu-fm-2024',
      storageBucket: 'hindu-fm-2024.appspot.com',
      messagingSenderId:'66685597035',
      appId: '1:66685597035:android:22bc7e749d2ee83703882e',
}

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db, firebase }



