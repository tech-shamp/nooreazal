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
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
