import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAY_nkh8X0REsHgt1nTt95Km7inoHAZBFc",
    authDomain: "votapp-da699.firebaseapp.com",
    projectId: "votapp-da699",
    storageBucket: "votapp-da699.appspot.com",
    messagingSenderId: "981934426244",
    appId: "1:981934426244:web:1c5cd86d0d3d88a6e71ad1",
    measurementId: "G-LQ7V2FBY9T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();