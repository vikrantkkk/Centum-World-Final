import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkuHhUKmK4J9t7StGmqAGBoIfQvJc_EZY",
    authDomain: "jettrade-chat-app.firebaseapp.com",
    projectId: "jettrade-chat-app",
    storageBucket: "jettrade-chat-app.appspot.com",
    messagingSenderId: "228143549752",
    appId: "1:228143549752:web:cd9e7e7c29abbdc85905cd",
    measurementId: "G-DVNN2L6WL5"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;