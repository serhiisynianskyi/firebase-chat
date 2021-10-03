import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyC5fbocowesrY0LOYz6ZBuS1oQqU-NkA58",
        authDomain: "chat-react-dabf9.firebaseapp.com",
        projectId: "chat-react-dabf9",
        storageBucket: "chat-react-dabf9.appspot.com",
        messagingSenderId: "880062787684",
        appId: "1:880062787684:web:f5fe8241815f0006cc6f71",
        measurementId: "G-M4YKMZXEPS"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

