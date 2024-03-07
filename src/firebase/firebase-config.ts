import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBOCZBl-TAvaVhKtaom4knrsUAeFdtxph4",
  authDomain: "bemastertechincal-test.firebaseapp.com",
  projectId: "bemastertechincal-test",
  storageBucket: "bemastertechincal-test.appspot.com",
  messagingSenderId: "939899946073",
  appId: "1:939899946073:web:2b97b5b7d0e6e77d52dd48",
  measurementId: "G-T4LBHT77N0"
};

export const app = initializeApp(firebaseConfig);
