/* ==========================================
   NOTEHUB AUTH SYSTEM
   PART 1/4
========================================== */

import {
    auth,
    provider,
    db
} from "./firebase-config.js";

import {
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

console.log("✅ Auth Module Loaded");

/* ==========================================
   GOOGLE LOGIN
========================================== */

async function loginWithGoogle() {

    try {

        provider.setCustomParameters({
            prompt: "select_account"
        });

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);
        /* ==========================================
   SAVE USER TO FIRESTORE
========================================== */

        if (!userSnap.exists()) {

            await setDoc(userRef, {

                uid: user.uid,

                displayName: user.displayName,

                email: user.email,

                photoURL: user.photoURL,

                premium: false,

                plan: "free",

                expiresAt: null,

                role: "student",

                loginCount: 1,

                createdAt: serverTimestamp(),

                lastLogin: serverTimestamp()

            });

            console.log("✅ New User Saved");

        } else {

            await updateDoc(userRef, {

                lastLogin: serverTimestamp(),

                loginCount: increment(1)

            });

            console.log("✅ Existing User Updated");

        }

        console.log("✅ Login Successful");

    } catch (error) {

        console.error("Login Error:", error);

        alert(error.message);

    }

}
/* ==========================================
   AUTH STATE OBSERVER
   PART 3/4
========================================== */

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("✅ Logged In");

        window.NoteHubUser = {

            uid: user.uid,

            name: user.displayName,

            email: user.email,

            photo: user.photoURL

        };

        localStorage.setItem(
            "notehub_user",
            JSON.stringify(window.NoteHubUser)
        );

        const currentPage = window.location.pathname
            .split("/")
            .pop();

        if (currentPage === "login.html") {

            window.location.replace("index.html");

        }

    } else {

        console.log("❌ No User Logged In");

        window.NoteHubUser = null;

        localStorage.removeItem("notehub_user");

    }

});
/* ==========================================
   LOGOUT
   PART 4/4
========================================== */

async function logoutUser() {

    try {

        await signOut(auth);

        localStorage.removeItem("notehub_user");

        window.location.href = "index.html";

    } catch (error) {

        console.error("Logout Error:", error);

    }

}

/* ==========================================
   EXPORT FUNCTIONS
========================================== */

window.loginWithGoogle = loginWithGoogle;

window.logoutUser = logoutUser;

console.log("✅ Auth Ready");

/* ==========================================
   CONNECT LOGIN BUTTON
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const googleLoginBtn = document.getElementById("googleLoginBtn");

    if (googleLoginBtn) {

        googleLoginBtn.addEventListener("click", loginWithGoogle);

        console.log("✅ Google Login Button Connected");

    } else {

        console.error("❌ googleLoginBtn NOT FOUND");

    }

});