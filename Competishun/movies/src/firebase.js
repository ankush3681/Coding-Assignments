import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBEuvCX28EiRfBJVwOGaRL9lM13E5ap5vo",
  authDomain: "movies-816df.firebaseapp.com",
  projectId: "movies-816df",
  storageBucket: "movies-816df.appspot.com",
  messagingSenderId: "931800406442",
  appId: "1:931800406442:web:6cda19e33f2b33af4b33d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;