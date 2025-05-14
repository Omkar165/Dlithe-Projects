document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };

    // Run function on scroll
    window.addEventListener("scroll", revealSection);

    // Run function on page load
    revealSection();
});
