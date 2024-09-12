// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-proyecto.firebaseapp.com",
    databaseURL: "https://tu-proyecto.firebaseio.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "tu-messaging-sender-id",
    appId: "tu-app-id"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar la base de datos
const database = firebase.database();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiUelYY_oCXWtqTEFxiM7XcmMvXe15Zic",
    authDomain: "sistemaasistencia-f98fb.firebaseapp.com",
    projectId: "sistemaasistencia-f98fb",
    storageBucket: "sistemaasistencia-f98fb.appspot.com",
    messagingSenderId: "72352052415",
    appId: "1:72352052415:web:70eeb8929983d34daf020a",
    measurementId: "G-9XP9J4X8L0"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
