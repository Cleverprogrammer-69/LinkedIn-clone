import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUWoBiKRRh-SYyLji1RCuvXyTVQcswHIg",
  authDomain: "linkedin-clone-98508.firebaseapp.com",
  projectId: "linkedin-clone-98508",
  storageBucket: "linkedin-clone-98508.appspot.com",
  messagingSenderId: "922773963792",
  appId: "1:922773963792:web:2685ffb74496928adff695",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
