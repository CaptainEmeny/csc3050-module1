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

async function saveRecipeToServer(recipe) {
    const response = await fetch('/save-recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

    const result = await response.json();
    console.log('Recipe saved successfully:', result);  
}

async function createRecipeData() {
    
    const recipeData = await fetchRecipeData("Arrabiata"); // Call the function with a sample recipe name

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

    const favorite = false; // Default value for favorite
    const rating = 0; // Default value for rating
    const notes = ""; // Default value for notes


    const recipe = {
        id,
        country_origin,
        instructions,
        category,
        png,
        ingredients,

        //user editable fields
        favorite, 
        rating, 
        notes
    };

    await saveRecipeToServer(recipe); // Save the recipe to the server


    // Print the recipe data to the console
    console.log(`Country of Origin: ${country_origin}`);
    console.log(`Instructions: ${instructions}`);
    console.log(`Category: ${category}`);
    console.log(`Image URL: ${png}`);
    console.log(`Ingredients: ${ingredients.join(", ")}`);

}

async function deleteRecipe(id) {
    console.log("Deleting recipe with ID:", id);

    const response = await fetch(
        `/saved-recipes/${id}`,
        {
            method: 'DELETE'
        }
    );
    console.log("Status Code:", response.status);

    const result = await response.json();

    console.log(result);
}

async function updateRecipe(id, updates) {
    const response = await fetch(
        `/saved-recipes/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        }
    );

    const result = await response.json();

    console.log(result);
}

// Example usage of the functions, note that we can only call these functions one at a time to avoid conflicts, otherwise no results will be returned. 
// Call the function to create and save recipe data
//createRecipeData(); 

// Call delete recipe function with a sample recipe ID
//deleteRecipe("52771"); 

// Call update recipe function with a sample recipe ID and updates
//updateRecipe("52771", { 
    //rating: 5,
   // notes: "This is a test note."
//});