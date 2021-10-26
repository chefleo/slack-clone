import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqPTV1OSH2osqGyHHDtSG1R_zT5f_rGIc',
  authDomain: 'slack-clone-edaa0.firebaseapp.com',
  projectId: 'slack-clone-edaa0',
  storageBucket: 'slack-clone-edaa0.appspot.com',
  messagingSenderId: '883875712115',
  appId: '1:883875712115:web:b346e2c00e925bc3baae06',
  measurementId: 'G-CT2VN0G8Q5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
