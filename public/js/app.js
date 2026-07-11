// ===============================
// AK Group of Technologies
// app.js
// ===============================

// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// GSAP Hero Animation
window.addEventListener("load", () => {

    gsap.from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1
    });

    gsap.from(".badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5
    });

    gsap.from(".hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8
    });

    gsap.from(".hero p", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.1
    });

    gsap.from(".hero .btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.4
    });

});

// Navbar background on scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".glass-nav");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.4)";
    } else {
        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "none";
    }

});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("🚀 AK Group of Technologies Loaded Successfully");
