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

async function fetchRecipeData(recipe) {
    try {
        const response = await fetch(
            `/recipes/${encodeURIComponent(recipe)}`
        ); 

        const data = await response.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.error('Error fetching recipe data:', error);
    }
}

async function displayRecipeData() {
    
    const recipeData = await fetchRecipeData("Arrabiata"); // Call the function with a sample recipe name
    const recipe = recipeData.meals[0].strMeal || "N/A";
    console.log(`Recipe Name: ${recipe}`);
    await saveRecipeToServer(recipe); // Save the recipe to the server

    const id = recipeData.meals[0].idMeal || "N/A";
    const country_origin = recipeData.meals[0].strCountry || "N/A"; 
    const instructions = recipeData.meals[0].strInstructions || "N/A"; 
    const category = recipeData.meals[0].strCategory || "N/A";
    const png = recipeData.meals[0].strMealThumb || "N/A"; 
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = recipeData.meals[0][`strIngredient${i}`];
        const measure = recipeData.meals[0][`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    // Print the recipe data to the console
    console.log(`Country of Origin: ${country_origin}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Category: ${category}`);
    console.log(`Image URL: ${png}`);
    console.log(`Ingredients: ${ingredients.join(", ")}`);

}

displayRecipeData(); 
fetchRecipeData("Arrabiata");