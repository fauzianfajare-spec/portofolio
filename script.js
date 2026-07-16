/*=========================================
    TAB MENU
=========================================*/

function openTab(tabName) {

    // Sembunyikan semua konten
    const contents = document.querySelectorAll(".tab-content");

    contents.forEach(content => {
        content.classList.remove("active");
    });

    // Hapus class active dari semua tombol
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Tampilkan konten yang dipilih
    document.getElementById(tabName).classList.add("active");

    // Tambahkan active ke tombol
    event.currentTarget.classList.add("active");

    // Refresh AOS animations for the newly visible cards
    if (typeof AOS !== 'undefined') {
        setTimeout(() => {
            AOS.refresh();
        }, 50);
    }
}


/*=========================================
    NAVBAR SCROLL
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,18,41,.95)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,18,41,.75)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
    ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/*=========================================
    AOS INITIALIZATION & REFRESH LOGIC
=========================================*/
// Manual scroll reveal removed. Handled by AOS (Animate on Scroll) library.



/*=========================================
    CARD HOVER EFFECT
=========================================*/

const cards = document.querySelectorAll(
    ".card, .skill-card, .certificate-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
        rgba(100,255,218,.15),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.05)";

    });

});


/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(
    ".hero-button a, .btn a, .tab, .btn-custom-action"
);

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=========================================
    LOADING ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================
    MOBILE MENU TOGGLE
=========================================*/

const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

if (mobileMenu && nav) {
    mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Close mobile menu when clicking any nav link
    const navLinksList = document.querySelectorAll("nav a");
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            nav.classList.remove("active");
        });
    });
}


/*=========================================
    CONSOLE
=========================================*/

console.log(
    `
==================================
Portfolio Website
Developed by Fauzian Fajar
Theme : Navy Modern
==================================
`
);