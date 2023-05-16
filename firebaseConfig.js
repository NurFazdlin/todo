import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMzswUsZrAgPIQnWkr5JpV1Oszxd82_c",
  authDomain: "todo-a38a5.firebaseapp.com",
  projectId: "todo-a38a5",
  storageBucket: "todo-a38a5.appspot.com",
  messagingSenderId: "787689877632",
  appId: "1:787689877632:web:2ac99a51366e00109c7665"
};

if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };