// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3eBgmaCriVtCOyEBdsxPnhzAB-nHJhmw",
  authDomain: "fir-practise-2e634.firebaseapp.com",
  projectId: "fir-practise-2e634",
  storageBucket: "fir-practise-2e634.appspot.com",
  messagingSenderId: "966950123761",
  appId: "1:966950123761:web:246da3fd817ec55a8bd150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;