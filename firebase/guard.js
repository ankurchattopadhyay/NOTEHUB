/* ==========================================
   NOTEHUB ROUTE GUARD
   PART 1/5
========================================== */

import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

console.log("🛡 Guard Loaded");
/* ==========================================
   PUBLIC PAGES
========================================== */

const publicPages = [

    "index.html",

    "about.html",

    "contact.html",

    "login.html"

];
/* ==========================================
   CURRENT PAGE
========================================== */

const currentPage = window.location.pathname
.split("/")
.pop();
/* ==========================================
   AUTH CHECK
========================================== */

onAuthStateChanged(auth, (user) => {

    // Public Pages
    if (publicPages.includes(currentPage)) {

        console.log("🌍 Public Page");

        return;

    }

    // Protected Pages
    if (!user) {

        console.log("🔒 Login Required");

        window.location.href = "login.html";

        return;

    }

    console.log("✅ Access Granted");

});

/* ==========================================
   NOTEHUB SESSION
   PART 5/5
========================================== */

window.NoteHub = {

    isLoggedIn: false,

    currentUser: null

};

onAuthStateChanged(auth, (user) => {

    if (user) {

        window.NoteHub.isLoggedIn = true;

        window.NoteHub.currentUser = user;

        console.log("🟢 Session Active");

    }

    else {

        window.NoteHub.isLoggedIn = false;

        window.NoteHub.currentUser = null;

        console.log("🔴 Session Closed");

    }

});