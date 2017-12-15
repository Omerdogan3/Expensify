import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBLQhLWynd8S-2Xqv6pomSKtd2X8UKUSRY",
    authDomain: "expensify-b44c6.firebaseapp.com",
    databaseURL: "https://expensify-b44c6.firebaseio.com",
    projectId: "expensify-b44c6",
    storageBucket: "expensify-b44c6.appspot.com",
    messagingSenderId: "690555011246"
  };

firebase.initializeApp(config);
firebase.database().ref().set({
    name: 'Omer Dogan'
});