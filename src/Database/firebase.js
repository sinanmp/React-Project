
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDpk_xXNr7rsjgL929goADdR_s_8PNpCNI",
  authDomain: "sample-99478.firebaseapp.com",
  projectId: "sample-99478",
  storageBucket: "sample-99478.appspot.com",
  messagingSenderId: "500250080759",
  appId: "1:500250080759:web:de87e87151832d8785eaf2",
  measurementId: "G-0YFRG5DS4E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)