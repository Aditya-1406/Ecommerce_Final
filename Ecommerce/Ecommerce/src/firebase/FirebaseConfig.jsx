
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBocnLGOfpQXQ29ed-EnoAjE9TpO4yRj8k",
  authDomain: "myfirstapp-8aaae.firebaseapp.com",
  projectId: "myfirstapp-8aaae",
  storageBucket: "myfirstapp-8aaae.appspot.com",
  messagingSenderId: "155494494982",
  appId: "1:155494494982:web:c374a0152c89590ad22487"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth};