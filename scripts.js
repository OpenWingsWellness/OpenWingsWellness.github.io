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

// Ensure proper display after resizing window
window.addEventListener("resize", () => {
    const nav = document.getElementById("nav-menu");
    if (window.innerWidth >= 768) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});

// CSS for the button
const style = document.createElement("style");
style.textContent = `
.btn {
    background-color: #ffffff;
    color: #1b3b6f;
    padding: 12px 25px;
    font-weight: bold;
    border-radius: 6px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    transition: all 0.3s ease;
    border: 2px solid #ffffff;
}

.btn:hover {
    background-color: #ffffff;
    color: #1b3b6f;
    border: 2px solid #1b3b6f;
}`;
document.head.appendChild(style);
