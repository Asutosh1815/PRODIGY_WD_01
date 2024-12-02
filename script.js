// JavaScript for interactive navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    // Change navbar style on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
