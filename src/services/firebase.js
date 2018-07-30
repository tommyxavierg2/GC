import firebase from 'firebase'
import Vuefire from 'vuefire'

var config = {
  apiKey: "AIzaSyCyuRKzU5C717vtoEyiraD1sz_MnoSMdag",
  authDomain: "global-trade-international.firebaseapp.com",
  databaseURL: "https://global-trade-international.firebaseio.com",
  projectId: "global-trade-international",
  storageBucket: "",
  messagingSenderId: "859351765436"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true })

export default {
  database: firebase.database(),
  db: firebase.firestore()
}
