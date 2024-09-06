document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    // Scroll to Features section on button click
    ctaButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#features").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
