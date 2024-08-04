// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIQEXCuOeVA7OGMaqbnZgRxz9eVNaxZtw",
  authDomain: "inventory-83ce1.firebaseapp.com",
  projectId: "inventory-83ce1",
  storageBucket: "inventory-83ce1.appspot.com",
  messagingSenderId: "770284705642",
  appId: "1:770284705642:web:d2ab08b5952d9e32813713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };