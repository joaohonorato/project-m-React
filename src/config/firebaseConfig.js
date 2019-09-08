import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initializa firebase
const firebaseConfig = {
    apiKey: "AIzaSyCPiSfCo18acJ3vyfhe7B4WrDniZUOEAOk",
    authDomain: "project-m-2aa43.firebaseapp.com",
    databaseURL: "https://project-m-2aa43.firebaseio.com",
    projectId: "project-m-2aa43",
    storageBucket: "project-m-2aa43.appspot.com",
    messagingSenderId: "890589343319",
    appId: "1:890589343319:web:2a1e0663252abe28713d12"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;