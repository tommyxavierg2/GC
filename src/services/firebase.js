import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCyuRKzU5C717vtoEyiraD1sz_MnoSMdag",
  authDomain: "global-trade-international.firebaseapp.com",
  databaseURL: "https://global-trade-international.firebaseio.com",
  projectId: "global-trade-international",
  storageBucket: "",
  messagingSenderId: "859351765436"
};

firebase.initializeApp(config);

export default {
  database: firebase.database()
}
