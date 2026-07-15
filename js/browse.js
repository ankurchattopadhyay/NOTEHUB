/* ===================================================
   NOTEHUB
   BROWSE.JS
=================================================== */

"use strict";

/* ===================================================
   CONFIGURATION
=================================================== */

/* তোমার Free Google Drive Folder Link এখানে বসাবে */

const FREE_NOTES_URL =
"https://drive.google.com/drive/folders/15R5D9AM-3o3TFkyr_Cze2XrzhNVmjb1e?usp=drive_link";

/* ===================================================
   FREE NOTES BUTTON
=================================================== */

const freeBtn = document.getElementById("freeNotesBtn");

if (freeBtn) {

    freeBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.open(FREE_NOTES_URL, "_blank");

    });

}

/* ===================================================
   SEARCH
=================================================== */

const searchBox = document.getElementById("searchBox");

const noteCards = document.querySelectorAll(".note-card");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        noteCards.forEach((card) => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ===================================================
   PREMIUM BUTTON
=================================================== */

document.querySelectorAll(".premium-btn").forEach((btn) => {

    btn.addEventListener("click", () => {

        console.log("Premium Page Opening...");

    });

});

/* ===================================================
   FUTURE FIREBASE
=================================================== */

const BrowseConfig = {

    freeFolder: FREE_NOTES_URL,

    premiumEnabled: false

};

console.log("Browse Page Ready");
