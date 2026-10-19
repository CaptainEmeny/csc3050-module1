// Tells script to wait until all HTML and DOM is loaded before running the script, and adds functionality to every dropdown button
document.addEventListener("DOMContentLoaded", () => {
    const moreInfo_btns = document.querySelectorAll(".dropdown-menu-button");

    moreInfo_btns.forEach(button => {
        button.addEventListener("click", event => fillMenu(event));
    });
});

// uses aria attributes (aria-controls, aria-expanded) to manage dropdown menus
const fillMenu = event => {
    const button = event.currentTarget;
   const menuId = button.getAttribute("aria-controls");
   const dropdown = document.getElementById(menuId);

    if (!dropdown) return;

    // Close all other open dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu !== dropdown && !menu.hidden) {
            menu.hidden = true;
            menu.innerHTML = "";

            const otherButton = document.querySelector(
                `[aria-controls="${menu.id}"]`
            );

            if (otherButton) {
                otherButton.setAttribute("aria-expanded", "false");
            }

        }
    });

    // Extract the specific recipe data from the data attributes
    const { duration, difficulty, cuisine } = dropdown.dataset;

    if (button.getAttribute("aria-expanded") === "true") {
        // Hides menu
        dropdown.hidden = true;
        dropdown.innerHTML = "";
        button.setAttribute("aria-expanded", "false");
    } else {
        // Shows menu
        dropdown.innerHTML = `
            <ol>
                <li>Duration: ${duration}</li>
                <li>Difficulty: ${difficulty}</li>
                <li>Cuisine: ${cuisine}</li>
            </ol>
        `;
       
        dropdown.hidden = false;
        button.setAttribute("aria-expanded", "true");
    }
};
