import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';


const firebase = require("firebase");
require("firebase/firestore");


firebase.initializeApp({
    apiKey: "AIzaSyBbPKAp2zEBAqJ3x4XNl-fLnR-UCIJVxNU",
    authDomain: "everclone-project.firebaseapp.com",
    databaseURL: "https://everclone-project.firebaseio.com",
    projectId: "everclone-project",
    storageBucket: "everclone-project.appspot.com",
    messagingSenderId: "826123605607",
    appId: "1:826123605607:web:6ade99aa9c11504aba26c2",
    measurementId: "G-N77J06KHZ4"
});


ReactDOM.render(<App />, document.getElementById("evernote-container"));