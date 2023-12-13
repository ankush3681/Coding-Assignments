import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf6nG_8pARhusxR5bsjby0_0jNHpCz6AM",
  authDomain: "practise-907eb.firebaseapp.com",
  projectId: "practise-907eb",
  storageBucket: "practise-907eb.appspot.com",
  messagingSenderId: "973308520881",
  appId: "1:973308520881:web:bd8cd24c5934439dd3f590",
  measurementId: "G-HM64ZJX4Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider };