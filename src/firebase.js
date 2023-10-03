import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkLarbV7E5glktdcRSqetzrv2ucwmt98I",
  authDomain: "chatapp-ffd81.firebaseapp.com",
  projectId: "chatapp-ffd81",
  storageBucket: "chatapp-ffd81.appspot.com",
  messagingSenderId: "834239992368",
  appId: "1:834239992368:web:9d32906412fecff6de93f5",
  measurementId: "G-5MKBWB19TG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);