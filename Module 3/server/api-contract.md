# API Contract

## Recipe object:

{ <br>
 id: integer <br>
 country_origin: string <br>
 category: string <br>
 png: string <br>
 ingredients: string <br><br>
 //Updatable parameters
 favorite: boolean <br>
 rating: integer <br>
 notes: string <br>
}

## GET /saved-recipes
Returns saved recipes from saved-recipes.json
* **URL Params**  
  None 
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `
  [
    {<recipe_object>},
    {<recipe_object>},
    {<recipe_object>}
  ]` 
OR 
* **If empty:** 
* **Code:** 200
  **Content:**  No recipes saved yet.
`

## GET /recipes/:id
Returns data for a specifc recipe searched by name. 
* **URL Params**  
  *Required:* `id=[integer]` 
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `
  [
    {<recipe_object>}
  ]` 
* **Error Response:**  
  * **Code:** 502  
  **Content:** `{MealDB API not available}` 
OR  
  * **Code:** 500
  **Content:** `{error: Internal Server Error}` 

## POST /save-recipe
Adds/saves recipe data to saved-recipes.json
* **URL Params**  
  None 
* **Data Params**  
  *Required:* <recipe_object> 
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 201  
  **Content:**  `{recipe saved successfully.}`
* **Error Response:**
  * **Code:** 500
  **Content:** `{error: Failed to save recipe.}`
OR
  **Code:** 400
   **Content:** `{Bad request: No recipe provided.}`

## DELETE /saved-recipes/:id
Deletes a recipe specifed by id from saved-recipes.json
* **URL Params**  
  *Required:* `id=[integer]` 
* **Data Params**  
  None 
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  **Content:** `{Recipe successfully deleted.}`
* **Error Response:**
  * **Code:** 404  
  **Content:** `{'error: recipe not found.'}`

## PUT /saved-recipes/:id
Updates editable parameters on saved recipes stored in saved-recipes.json
* **URL Params**  
  *Required:* `id=[integer]` 
* **Data Params**  
   *Optional:*
{
  favorite: boolean,
  rating: integer,
  notes: string
}
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200 
  **Content:**  `{'Additional info updated successfully.'}`
* **Error Response:**
  * **Code:** 404
  **Content:** `{error: Recipe not found. Info not updated.}`



        