import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
    apiKey: "AIzaSyCSiHm7-XcLslQFNF5kVCAAEiEVO_7dhxU",
    authDomain: "gif-collector-8e534.firebaseapp.com",
    projectId: "gif-collector-8e534",
    storageBucket: "gif-collector-8e534.appspot.com",
    messagingSenderId: "359815676994",
    appId: "1:359815676994:web:ea60afb52735a896a559db",
    measurementId: "G-C13RZNLX1T"
} : {
    apiKey: "AIzaSyCSiHm7-XcLslQFNF5kVCAAEiEVO_7dhxU",
    authDomain: "gif-collector-8e534.firebaseapp.com",
    projectId: "gif-collector-8e534",
    storageBucket: "gif-collector-8e534.appspot.com",
    messagingSenderId: "359815676994",
    appId: "1:359815676994:web:ea60afb52735a896a559db",
    measurementId: "G-C13RZNLX1T"
}

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);


export default app;