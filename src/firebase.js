import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUWoBiKRRh-SYyLji1RCuvXyTVQcswHIg",
  authDomain: "linkedin-clone-98508.firebaseapp.com",
  projectId: "linkedin-clone-98508",
  storageBucket: "linkedin-clone-98508.appspot.com",
  messagingSenderId: "922773963792",
  appId: "1:922773963792:web:2685ffb74496928adff695",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
