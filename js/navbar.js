/* ==========================================
   NOTEHUB NAVBAR
   PART 1/5
========================================== */

import { auth } from "../firebase/firebase-config.js";

import {

    onAuthStateChanged,

    signOut

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const userMenuContainer = document.getElementById("userMenuContainer");

console.log("✅ Navbar Loaded");
/* ==========================================
   USER MENU
   PART 2/5
========================================== */

onAuthStateChanged(auth, (user) => {

    if (!userMenuContainer) return;

    if (!user) {

        userMenuContainer.innerHTML = `
            <a href="login.html" class="login-btn" id="loginBtn">
                Login
            </a>
        `;

        return;

    }

    const firstName = user.displayName
        ? user.displayName.split(" ")[0]
        : "User";

    const photo = user.photoURL
        ? user.photoURL
        : "https://via.placeholder.com/40";

    userMenuContainer.innerHTML = `
    
    <div class="user-menu">

        <button class="user-btn" id="userBtn">

            <img src="${photo}" alt="User">

            <span>${firstName}</span>

            ▼

        </button>

        <div class="user-dropdown" id="userDropdown">

            <a href="profile.html">

                👤 My Profile

            </a>

            <a href="premium.html">

                💎 Premium

            </a>

            <a href="upload.html">

                📤 My Uploads

            </a>

            <hr>

            <a href="#" id="logoutBtn">

                🚪 Logout

            </a>

        </div>

    </div>
    
    `;

});
/* ==========================================
   NAVBAR
   PART 3/5
========================================== */

document.addEventListener("click", async (e) => {

    const userBtn = document.getElementById("userBtn");
    const userDropdown = document.getElementById("userDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    if (!userBtn || !userDropdown) return;

    // Toggle Dropdown
    if (userBtn.contains(e.target)) {

        e.preventDefault();

        userDropdown.classList.toggle("show");

        return;

    }

    // Logout
    if (logoutBtn && logoutBtn.contains(e.target)) {

        e.preventDefault();

        try {

            await signOut(auth);

            window.location.href = "index.html";

        } catch (err) {

            console.error(err);

        }

        return;

    }

    // Click Outside
    if (!userDropdown.contains(e.target)) {

        userDropdown.classList.remove("show");

    }

});