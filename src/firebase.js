import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFyRhRyvnMIn4EcIs-PkC6XozjSTt0_To",
    authDomain: "whatsapp-clone-4e464.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-4e464.firebaseio.com",
    projectId: "whatsapp-clone-4e464",
    storageBucket: "whatsapp-clone-4e464.appspot.com",
    messagingSenderId: "904691094831",
    appId: "1:904691094831:web:e62dc2293345dbd5b6bdda",
    measurementId: "G-8B4NMR5S6M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;