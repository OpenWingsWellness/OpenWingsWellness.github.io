document.querySelectorAll("nav a, .cta-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
});
