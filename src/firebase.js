// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFGxia9CxpJ7FbX4tZkFb42992zftv2VU",
    authDomain: "react-demo-d28f4.firebaseapp.com",
    projectId: "react-demo-d28f4",
    storageBucket: "react-demo-d28f4.appspot.com",
    messagingSenderId: "743886751117",
    appId: "1:743886751117:web:e1ba27d92a3cbd32c7e9c4",
    measurementId: "G-41RMNFN1MT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);