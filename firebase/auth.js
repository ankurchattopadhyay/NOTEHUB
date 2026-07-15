/* ==========================================
   NOTEHUB AUTHENTICATION
   PART 1/5
========================================== */

import {

    auth,

    provider,

    db

} from "../firebase/firebase-config.js";

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
   PART 2/5
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

        } else {

            await updateDoc(userRef, {

                lastLogin: serverTimestamp(),

                loginCount: increment(1)

            });

        }

        console.log("✅ Login Successful");

    } catch (error) {

    console.error("Error Code:", error.code);

    console.error("Error Message:", error.message);

    console.error(error);

    alert(error.message);

}

}
/* ==========================================
   AUTH STATE OBSERVER
   PART 3/5
========================================== */

onAuthStateChanged(auth, async (user) => {

    if (user) {

    console.log("✅ Logged In");

    console.log(user.displayName);
    console.log(user.email);
    console.log(user.uid);

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
    const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "login.html") {
    window.location.replace("index.html");
}
    
}else {

        console.log("❌ No User Logged In");

        window.NoteHubUser = null;

        localStorage.removeItem("notehub_user");

    }

});
/* ==========================================
   LOGOUT
   PART 4/5
========================================== */

async function logoutUser() {

    try {

        await signOut(auth);

        alert("Logged Out Successfully");

        window.location.href = "index.html";

    }

    catch (error) {

        console.error(error);

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

const googleLoginBtn = document.getElementById("googleLoginBtn");

if (googleLoginBtn) {

    googleLoginBtn.addEventListener("click", async () => {

        await loginWithGoogle();

    });

} else {

    console.error("googleLoginBtn NOT FOUND");

}