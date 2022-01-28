// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl0xLc-HYJtN1xX8VfLflHB37KgSOPZsI",
  authDomain: "tyshopapp-ab9a4.firebaseapp.com",
  projectId: "tyshopapp-ab9a4",
  storageBucket: "tyshopapp-ab9a4.appspot.com",
  messagingSenderId: "568655178416",
  appId: "1:568655178416:web:59b587692ebb188cb66975",
  measurementId: "G-EVR55T7VSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;