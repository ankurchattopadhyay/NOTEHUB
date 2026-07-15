/* ==========================================
   NOTEHUB FIREBASE CONFIG
   PART 1/3
========================================== */

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyAo309BLwpAI8vxMVgN1Yy_W63JwgivpCM",

  authDomain: "notehub-9aca7.firebaseapp.com",

  projectId: "notehub-9aca7",

  storageBucket: "notehub-9aca7.firebasestorage.app",

  messagingSenderId: "830988449657",

  appId: "1:830988449657:web:cdcc08fd71d7899a62e1a8",

  measurementId: "G-5EL568FBG8"

};
/* ==========================================
   FIREBASE INITIALIZE
   PART 2/3
========================================== */

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

console.log("✅ Firebase Initialized");
/* ==========================================
   FIREBASE SERVICES
   PART 3/3
========================================== */

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/* Authentication */

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

/* Firestore */

const db = getFirestore(app);

/* Export */

export {

    app,

    analytics,

    auth,

    provider,

    db

};

console.log("✅ Firebase Services Ready");