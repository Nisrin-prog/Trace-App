 import firebase from 'firebase';
 
 
 var firebaseConfig = {
    apiKey: "AIzaSyA_ZEr_OFnLf7mJXBbCeeVL8AZjxKepph4",
    authDomain: "trace-a8c23.firebaseapp.com",
    databaseURL: "https://trace-a8c23-default-rtdb.firebaseio.com",
    projectId: "trace-a8c23",
    storageBucket: "trace-a8c23.appspot.com",
    messagingSenderId: "578726837374",
    appId: "1:578726837374:web:f89b3abd095986292f6c2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database()