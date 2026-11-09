
/**
 * @param {*} id 
 * @returns The status of the item within the server (either already within
 *          the server, or not)
 */
export const isInServer = async(id) => {
    try{

        const promise = await fetch("/saved-recipes");

        if (!promise.ok) throw new Error(`Request failed with status ${promise.status}`);

        // Check if a recipe with the given id exists in the array
        const savedRecipes = await promise.json();
        const isInServer = savedRecipes.some(recipe => recipe.idMeal === id)

        return (isInServer);
        
    } catch (error){
        console.log("Get Error: ", error);
    }
}

/**
 * @param {*} recipe The entire recipe object to be deleted
 * @brief Takes the recipe id, attempts to find it in the server, and deletes it
 */
export const deleteFromServer = async(id) => {
    try{

        const promise = await fetch(`/saved-recipes/${recipe.idMeal}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        if (!promise.ok) throw new Error(`Request failed with status ${promise.status}`);


        console.log(`${recipe.strMeal} was removed to your saved meals`);

    } catch (error){
        console.log("Deletion Error: ", error);
    }
}

/**
 * @param {*} recipe The entire recipe object to be deleted
 * @brief Attempts to send the whole recipe packaged as a JSON to the server to
 *        be saved
 */
export const postToServer = async(recipe) => {
    try{

        const promise = await fetch(`/save-recipe`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe)
            });

        console.log(`${recipe.strMeal} was added to your saved meals!`);


    } catch (error){
        console.log("Post Error: ", error);
    }

}