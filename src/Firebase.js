import firebase from 'firebase/app'
import "firebase/firestore"
// import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "had-a-good-time.firebaseapp.com",
  projectId: "had-a-good-time",
  storageBucket: "had-a-good-time.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase