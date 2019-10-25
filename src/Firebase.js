import * as firebase from "firebase";
import * as admin from "firebase-admin";

const serviceAccount = require("../src/.icecream-255fc-firebase-adminsdk-2bjzt-dc6a0e0247.json");
export const GOOGLE_APPLICATION_CREDENTIALS =
  "/home/user/Dokumente/icecream-255fc-firebase-adminsdk-2bjzt-dc6a0e0247.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://icecream-255fc.firebaseio.com"
});

let config = {
  apiKey: "AIzaSyD2rW8DcxPQMnH1Jed9NMm5H4b3eV0sXBw",
  authDomain: "icecream-255fc.firebaseapp.com",
  databaseURL: "https://icecream-255fc.firebaseio.com",
  projectId: "icecream-255fc",
  storageBucket: "icecream-255fc.appspot.com",
  messagingSenderId: "196513738371",
  appId: "1:196513738371:web:baa9884a756f81741c35b6"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
