import firebase from '@firebase/app'
import '@firebase/database'
import '@firebase/auth'


//initialze
var config = {
    apiKey: "AIzaSyByTouwJwL8dDK44O7g6XxEFhmrXok2JHc",
    authDomain: "reactnativetodo-36662.firebaseapp.com",
    databaseURL: "https://reactnativetodo-36662.firebaseio.com",
    projectId: "reactnativetodo-36662",
    storageBucket: "reactnativetodo-36662.appspot.com",
    messagingSenderId: "531398700216"
  };
  //export islia kr rai hein taka jahan jahan firebase use krna ha wahan import kra k use kr sakan
 export const db=  firebase.initializeApp(config);
