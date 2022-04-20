import { initializeApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDalgPnFWoRdKDwIp1XGV38wQsIW-hCo7M",
    authDomain: "mealstogo-78b1b.firebaseapp.com",
    projectId: "mealstogo-78b1b",
    storageBucket: "mealstogo-78b1b.appspot.com",
    messagingSenderId: "846893326126",
    appId: "1:846893326126:web:0aecc16ee0de5ca87524bf",
  };
  let app = "";
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  }

  export const auth = getAuth(app);