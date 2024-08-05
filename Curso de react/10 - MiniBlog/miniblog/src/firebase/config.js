import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa-kn6nEOgPQSpchHAp_-nshLE54urx74",
    authDomain: "miniblog-2345b.firebaseapp.com",
    projectId: "miniblog-2345b",
    storageBucket: "miniblog-2345b.appspot.com",
    messagingSenderId: "1077337586505",
    appId: "1:1077337586505:web:90f9825e99312b008c7898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };