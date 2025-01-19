// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:  import.meta.env.Vite_apiKey,
//   authDomain:  import.meta.env.Vite_authDomain,
//   projectId:  import.meta.env.Vite_projectId,
//   storageBucket:  import.meta.env.Vite_storageBucket,
//   messagingSenderId:  import.meta.env.Vite_messagingSenderId,
//   appId:  import.meta.env.Vite_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBsjbYAWKAK0OjyJAJl4fhLjmTdqKQ0tt0",
  authDomain: "find-partners-f5bda.firebaseapp.com",
  projectId: "find-partners-f5bda",
  storageBucket: "find-partners-f5bda.firebasestorage.app",
  messagingSenderId: "770668067352",
  appId: "1:770668067352:web:c6fd35c6668f43849ce16d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);