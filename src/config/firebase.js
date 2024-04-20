import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcG104CifxMoGH0hHFtTYkJd4yp_SwwwM",
    authDomain: "ieltsappeal-6be6a.firebaseapp.com",
    projectId: "ieltsappeal-6be6a",
    storageBucket: "ieltsappeal-6be6a.appspot.com",
    messagingSenderId: "533044542836",
    appId: "1:533044542836:web:06f5c23e12e0b10b0a8021"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};