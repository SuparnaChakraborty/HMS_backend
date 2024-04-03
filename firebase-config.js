// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfNhbQ76jm7d0DLkdzGsUMTZhqz1JhYdI",
  authDomain: "medcare-14062.firebaseapp.com",
  projectId: "medcare-14062",
  storageBucket: "medcare-14062.appspot.com",
  messagingSenderId: "706528329777",
  appId: "1:706528329777:web:64b716aeab96ba889d9510"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 export const storage = getStorage(firebaseApp);
