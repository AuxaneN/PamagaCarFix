import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "pamagacar-7a32c.firebaseapp.com",
  databaseURL: "https://pamagacar-7a32c.firebaseio.com",
  projectId: "pamagacar-7a32c",
  storageBucket: "pamagacar-7a32c.appspot.com",
  messagingSenderId: "907056934816",
  appId: "1:907056934816:web:1ab90c8956fd87f53a7ec5"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;