// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_AUTHDOMAIN,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
