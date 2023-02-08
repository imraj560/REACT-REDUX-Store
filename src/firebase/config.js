import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAx17H_4NEO_oUkYPQlZQrySdzq9kWFwYU",
    authDomain: "moviestore-18c92.firebaseapp.com",
    projectId: "moviestore-18c92",
    storageBucket: "moviestore-18c92.appspot.com",
    messagingSenderId: "528002691485",
    appId: "1:528002691485:web:1b7323c88a9c3ead127f74"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;