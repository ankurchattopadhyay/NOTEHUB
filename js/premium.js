/* ===================================================
   NOTEHUB
   PREMIUM.JS
   VERSION 1.0
=================================================== */

"use strict";

/* ===================================================
   DOM ELEMENTS
=================================================== */

const buyPremiumBtn = document.getElementById("buyPremiumBtn");

/* ===================================================
   BUY PREMIUM BUTTON
=================================================== */

if (buyPremiumBtn) {

    buyPremiumBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const isLoggedIn = localStorage.getItem("notehub_logged_in");

        if (!isLoggedIn) {

            alert("Please login first to continue.");

            window.location.href = "login.html";

            return;

        }

        alert("🚀 Payment Gateway Coming Soon!");

    });

}

/* ===================================================
   PREMIUM STATUS
=================================================== */

const premiumUser = localStorage.getItem("notehub_premium");

if (premiumUser === "true") {

    if (buyPremiumBtn) {

        buyPremiumBtn.innerHTML = "✅ Premium Activated";

        buyPremiumBtn.style.background = "#16A34A";

        buyPremiumBtn.style.cursor = "default";

        buyPremiumBtn.disabled = true;

    }

}

/* ===================================================
   FUTURE RAZORPAY PLACEHOLDER
=================================================== */

const PremiumConfig = {

    amount: 99,

    currency: "INR",

    paymentGateway: "Razorpay",

    firebaseReady: true

};

console.log("Premium Page Ready");

/* ===================================================
   FUTURE FUNCTIONS
=================================================== */

// startPayment()

// verifyPayment()

// updateFirestore()

// unlockPremium()

// sendConfirmationEmail()
