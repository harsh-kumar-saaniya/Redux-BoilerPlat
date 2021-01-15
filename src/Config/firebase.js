import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCf8eitSKjIrfRVePh0Bnxw3VBfmNay9-U",
    authDomain: "todoapp-2918d.firebaseapp.com",
    databaseURL: "https://todoapp-2918d.firebaseio.com",
    projectId: "todoapp-2918d",
    storageBucket: "todoapp-2918d.appspot.com",
    messagingSenderId: "184005343381",
    appId: "1:184005343381:web:3a673d4f57ffec9492039c",
    measurementId: "G-3RY36Q41SF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();