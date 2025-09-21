// Fade-in effect when scrolling
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("body, li, h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
