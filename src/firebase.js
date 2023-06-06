// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCUlbBSQDLR6hTw_Emj4s3gmot0MHiLs-I",
    authDomain: "habit-tracker-95d3c.firebaseapp.com",
    projectId: "habit-tracker-95d3c",
    storageBucket: "habit-tracker-95d3c.appspot.com",
    messagingSenderId: "802649215864",
    appId: "1:802649215864:web:5e5f557634635f88bdae8d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;