import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = { apiKey: "AIzaSyAy4ylK68K_WGwDbhPsA79KoRfTUsqC-Dw", authDomain: "willy-f6e7b.firebaseapp.com", projectId: "willy-f6e7b", storageBucket: "willy-f6e7b.appspot.com", messagingSenderId: "631531373730", appId: "1:631531373730:web:1c9abf43905323675d83fb", measurementId: "G-D315S89HDP" };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
