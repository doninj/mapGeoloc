// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApSDi8Ks_iiySmFbBQQcd1oQqo9fD5Kp0",
    authDomain: "login-test-20634.firebaseapp.com",
    projectId: "login-test-20634",
    storageBucket: "login-test-20634.appspot.com",
    messagingSenderId: "97422892162",
    appId: "1:97422892162:web:79460293a4472c7456e89b"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
