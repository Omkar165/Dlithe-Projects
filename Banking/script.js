document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Sticky Navigation Animation
    let navbar = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "#002244";
            navbar.style.transition = "0.3s";
        } else {
            navbar.style.background = "#004080";
        }
    });

    // Scroll to top button
    let scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerText = "↑ Top";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.background = "#004080";
    scrollToTopBtn.style.color = "white";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none";
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
