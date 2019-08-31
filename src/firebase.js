import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCScRckTpfhj0vBPhgUDI5bOTNdWW49q6M",
    authDomain: "todoist-tutorial-eedef.firebaseapp.com",
    databaseURL: "https://todoist-tutorial-eedef.firebaseio.com",
    projectId: "todoist-tutorial-eedef",
    storageBucket: "todoist-tutorial-eedef.appspot.com",
    messagingSenderId: "79554966986",
    appId: "1:79554966986:web:bb6b1bfe14b177d7"
});


export { firebaseConfig as firebase };