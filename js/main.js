/* ===================================================
   NOTEHUB v1.0
   MAIN.JS
   PART 1/4
=================================================== */

"use strict";

/* ===================================================
   DOM ELEMENTS
=================================================== */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

const scrollTopBtn = document.getElementById("scrollTop");

const header = document.querySelector(".header");

const loader = document.querySelector(".loader");

/* ===================================================
   MOBILE MENU
=================================================== */

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}

/* ===================================================
   CLOSE MENU AFTER CLICK
=================================================== */

document.querySelectorAll(".navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});

/* ===================================================
   STICKY HEADER SHADOW
=================================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 12px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});

/* ===================================================
   LOADER
=================================================== */

window.addEventListener("load",()=>{

if(loader){

setTimeout(()=>{

loader.classList.add("hide");

},500);

}

});
/* ===================================================
   SCROLL TO TOP BUTTON
=================================================== */

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ===================================================
   FADE ANIMATION ON SCROLL
=================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

".feature-card, .browse-card, .review-card, .faq-item, .stat-card"

).forEach((el) => {

    el.classList.add("fade-up");

    observer.observe(el);

});


/* ===================================================
   HERO ANIMATION
=================================================== */

const heroTags = document.querySelectorAll(".hero-tags span");

heroTags.forEach((tag, index) => {

    tag.style.animationDelay = `${index * 0.15}s`;

});


/* ===================================================
   ACTIVE NAVIGATION
=================================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach((link) => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});
/* ===================================================
   NOTEHUB v1.0
   MAIN.JS
   PART 3/4
=================================================== */

/* ===================================================
   ESC KEY CLOSE MOBILE MENU
=================================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && navbar) {

        navbar.classList.remove("active");

    }

});


/* ===================================================
   CLICK OUTSIDE MENU TO CLOSE
=================================================== */

document.addEventListener("click", (e) => {

    if (!navbar || !menuBtn) return;

    const clickedInsideNavbar = navbar.contains(e.target);
    const clickedMenuButton = menuBtn.contains(e.target);

    if (
        navbar.classList.contains("active") &&
        !clickedInsideNavbar &&
        !clickedMenuButton
    ) {
        navbar.classList.remove("active");
    }

});


/* ===================================================
   IMAGE LAZY LOADING
=================================================== */

document.querySelectorAll("img").forEach((img) => {

    img.setAttribute("loading", "lazy");

});


/* ===================================================
   BUTTON RIPPLE EFFECT
=================================================== */

document.querySelectorAll(".primary-btn,.premium-btn,.login-btn")
.forEach((button)=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ===================================================
   CONSOLE MESSAGE
=================================================== */

console.log(

"%c🚀 NoteHub v1.0 Loaded Successfully",

"color:#2563EB;font-size:16px;font-weight:bold;"

);
/* ===================================================
   NOTEHUB v1.0
   MAIN.JS
   PART 4/4
=================================================== */

/* ===================================================
   HEADER BACKGROUND ON SCROLL
=================================================== */

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(18px)";

    } else {

        header.style.background = "rgba(255,255,255,.88)";
        header.style.backdropFilter = "blur(14px)";

    }

});


/* ===================================================
   PREVENT EMPTY LINKS
=================================================== */

document.querySelectorAll('a[href="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

    });

});


/* ===================================================
   FUTURE FIREBASE PLACEHOLDER
=================================================== */

window.NoteHub={

    version:"1.0.0",

    user:null,

    premium:false,

    initialized:true

};


/* ===================================================
   INITIALIZE
=================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    console.log("✅ NoteHub Ready");

});