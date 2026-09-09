let menuVisible = false;

function responsiveHeader() {
    const nav = document.getElementById("mobile-nav");
    const toggle = document.querySelector(".menu-toggle");
    menuVisible = !menuVisible;
    nav.classList.toggle("responsive", menuVisible);
    toggle.setAttribute("aria-expanded", menuVisible);
}

function select() {
    const nav = document.getElementById("mobile-nav");
    const toggle = document.querySelector(".menu-toggle");
    nav.classList.remove("responsive");
    toggle.setAttribute("aria-expanded", "false");
    menuVisible = false;
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-rail nav a, #mobile-nav a");
const activeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
    });
}, { rootMargin: "-40% 0px -50%" });

sections.forEach((section) => activeSectionObserver.observe(section));