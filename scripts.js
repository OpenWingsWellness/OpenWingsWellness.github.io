document.querySelectorAll("nav a, .cta-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const offset = -window.innerHeight * 0.25; // Adjust this value as needed
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
    });
});

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}

// Close menu automatically after clicking links (mobile friendly)
document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

// Ensure proper display after resizing window
window.addEventListener("resize", () => {
    const nav = document.getElementById("nav-menu");
    if (window.innerWidth >= 768) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});
