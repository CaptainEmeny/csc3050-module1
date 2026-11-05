const express = require("express");
const path = require('path');
const fs = require('fs');


const app = express();
const recipeFile = path.join(__dirname, 'saved-recipes.json');
const publicPath = path.join(__dirname, 'public');


app.use(express.json());
app.use(express.static(publicPath));


let savedRecipes = [];


const port = 3000;


try {
    const data = fs.readFileSync(
        recipeFile,
        'utf8'
    );
    savedRecipes = JSON.parse(data);
} catch {
    console.log('No saved recipes. Cookbook is empty.');
}




app.get('/saved-recipes', (req, res) => {
    res.json(savedRecipes);
});


app.get('/recipes/:name', async (req, res) => {
    try {
        const recipe = req.params.name;


        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipe)}`
        );


        const data = await response.json();


        res.json(data);
        } catch (error) {
            console.error('Error fetching API data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
});


function saveRecipeToFile() {
    console.log('Saving recipe to file...');


    fs.writeFile(
        recipeFile,
        JSON.stringify(savedRecipes, null, 2),
        (err) => {
        if (err) {
                console.error('Error saving recipe:', err);
            } else {
                console.log('Recipe saved successfully.');
            }
        }
    );
}


app.post('/save-recipe', (req, res) => {
    console.log("POST request received at /save-recipe");
    console.log(req.body);
   
    const recipe = req.body;
    savedRecipes.push(recipe);
    saveRecipeToFile();
    res.status(201).json({ message: 'Recipe saved successfully.' });
});


app.delete('/saved-recipes/:id', (req, res) => {
    const id = req.params.id;


    console.log("Deleting recipe with ID:", id);


    savedRecipes = savedRecipes.filter(
        recipe => recipe.id !== id
    );


    console.log("Current Recipes:");
    console.log(savedRecipes);


    saveRecipeToFile();


    res.json({
        message: 'Recipe deleted successfully.'
    });
});


app.put('/saved-recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipe = savedRecipes.find(
        r => r.id === id);


    if (!recipe) {
        return res.status(404).json({
            message: 'Recipe not found.'
        });
    }


    Object.assign(recipe, req.body);
    saveRecipeToFile();


    res.json({
        message: 'Recipe updated successfully.',
        recipe
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
