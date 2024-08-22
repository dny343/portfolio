document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const contentSections = document.querySelectorAll(".content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Remove active class from all buttons
            tabButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to the clicked button
            button.classList.add("active");

            // Hide all content sections
            contentSections.forEach((section) => section.classList.remove("active"));

            // Show the target content section
            document.getElementById(targetTab).classList.add("active");
        });
    });
});
