import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'; 
 

const firebaseConfig = {
    apiKey: "AIzaSyCgs1WLKBLO2aoesTdhs_9EMvORScPJtu0",
    authDomain: "adopapp-32927.firebaseapp.com",
    databaseURL: "https://adopapp-32927.firebaseio.com",
    projectId: "adopapp-32927",
    storageBucket: "adopapp-32927.appspot.com",
    messagingSenderId: "97025575248",
    appId: "1:97025575248:web:ab1c95e909fb80be",
    measurementId: "G-W18CDBH0HQ"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const storage = getStorage(app)
  const auth = getAuth(app)

  export { app, db, storage, auth }