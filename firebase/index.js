import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env ,
    authDomain: process.env,
    databaseURL: process.env ,
    projectId: process.env ,
    storageBucket: process.env ,
    messagingSenderId: process.env ,
    appId: process.env ,
    measurementId: process.env 
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.app();
}

export default firebase;