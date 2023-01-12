import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1M1OW-TStjxQbl3Ax4cyQkoyI-z0BsJE",
  authDomain: "funtube-yt.firebaseapp.com",
  projectId: "funtube-yt",
  storageBucket: "funtube-yt.appspot.com",
  messagingSenderId: "438044255144",
  appId: "1:438044255144:web:5faa7466882a4b2545f39d",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
