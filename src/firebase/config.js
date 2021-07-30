import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXU3kbxR9PcaaAm2btz2AWc_4qPQPf008",
    authDomain: "photo-gallary-1d572.firebaseapp.com",
    projectId: "photo-gallary-1d572",
    storageBucket: "photo-gallary-1d572.appspot.com",
    messagingSenderId: "442962032490",
appId: "1:442962032490:web:e9450c24c689552b6f5713"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore();


export { projectStorage, projectFirestore };