document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = "translateY(0)";
            link.style.opacity = "1";
        }, index * 100); // Delay between each link
    });
});