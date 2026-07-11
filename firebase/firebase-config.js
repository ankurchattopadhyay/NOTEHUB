/* ==========================================
   NOTEHUB FIREBASE CONFIG
   PART 1/3
========================================== */

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyAeYm9HCaATsgHtjVVBB4d8k_fexnubsmk",

  authDomain: "notehub-ai-2b07d.firebaseapp.com",

  projectId: "notehub-ai-2b07d",

  storageBucket: "notehub-ai-2b07d.firebasestorage.app",

  messagingSenderId: "1055235004555",

  appId: "1:1055235004555:web:1e5d9aab37203d695b5c8e",

  measurementId: "G-3DKS00XFWT"

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