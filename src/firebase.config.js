// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtBMGpj9opCOLwtdt4R39_XOpFnHe7KA4",
  authDomain: "online-job-portal-6062d.firebaseapp.com",
  projectId: "online-job-portal-6062d",
  storageBucket: "online-job-portal-6062d.firebasestorage.app",
  messagingSenderId: "603321112713",
  appId: "1:603321112713:web:e3777eb12747880fdfce58"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};