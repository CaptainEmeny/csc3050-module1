// Tells script to wait until all HTML and DOM is loaded before running the script, and adds functionality to every dropdown button
document.addEventListener("DOMContentLoaded", function() {
    const moreInfo_btns = document.querySelectorAll(".dropdown-button");

        moreInfo_btns.forEach(button => {
        button.addEventListener("click", fillMenu);
    });
});

// uses open flag to determine whether to show or hide the menu, and fills the menu with the specific recipe data from the data attributes
function fillMenu() {
    const card = this.closest(".card");
    const dropdown = card.querySelector(".dropdown-menu");

    // Close all other open dropdowns
        document.querySelectorAll(".dropdown-menu.open").forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.remove("open");
                menu.innerHTML = "";
            }
        });

    // Extract the specific recipe data from the data attributes
    const duration = dropdown.dataset.duration;
    const difficulty =dropdown.dataset.difficulty;
    const cuisine = dropdown.dataset.cuisine;

    if (dropdown.classList.contains("open")) {
        // Hides menu
        dropdown.classList.remove("open");
        dropdown.innerHTML = "";
    } else {
        // Shows menu
        dropdown.innerHTML = `
            <ol>
                <li>Duration: ${duration}</li>
                <li>Difficulty: ${difficulty}</li>
                <li>Cuisine: ${cuisine}</li>
            </ol>
        `;
        dropdown.classList.add("open");
    }

}