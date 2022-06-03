// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDWfIFJiPBTQN_hkm7zd1zcGrAw5Yp5LeU",
  authDomain: "noore-azal.firebaseapp.com",
  projectId: "noore-azal",
  storageBucket: "noore-azal.appspot.com",
  messagingSenderId: "56171141682",
  appId: "1:56171141682:web:c311d77ba932e8b4d73a2b",
  measurementId: "G-GZJHBZCY6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = getFirestore(app);
