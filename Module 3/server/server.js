const express = require("express");
const path = require('path');
const fs = require('fs');
savedRecipes = []; 

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
    if (savedRecipes.length === 0) {
        return res.json({
            message: 'No recipes saved yet.'
        });
    }
   
    res.json(savedRecipes);
});


app.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = req.params.id;

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipe)}`
        );

       if (!response.ok) {
        return res.status(502).json({
         error: 'MealDB API unavailable.'
        });
       }

        const data = await response.json();

        res.json(data);
        } catch (error) {
            console.error('Error fetching API data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
});

app.post('/save-recipe', (req, res) => {
    const recipe = req.body;

    if (!recipe || Object.keys(recipe).length === 0) {
        return res.status(400).json({
            error: 'Bad request: No recipe provided.'
        });
    }

    savedRecipes.push(recipe);

    fs.writeFile(
        recipeFile,
        JSON.stringify(savedRecipes, null, 2),
        (err) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    error: 'error: Failed to save recipe.'
                });
            }

            res.status(201).json({
                message: 'Recipe saved successfully.'
            });
        }
    );
});


app.delete('/saved-recipes/:id', (req, res) => {
    const id = req.params.id;

    console.log("Deleting recipe with ID:", id);

     const recipeExists = savedRecipes.some(
        recipe => recipe.idMeal === id
    );

    if (!recipeExists) {
        return res.status(404).json({
            error: 'Recipe not found.'
        });
    }

    savedRecipes = savedRecipes.filter(
        recipe => recipe.id !== id
    );

    console.log("Current Recipes:");
    console.log(savedRecipes);

    saveRecipeToFile();

    res.json({
        message: 'Recipe successfully deleted.'
    });
});


app.put('/saved-recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipe = savedRecipes.find(
        r => r.idMeal === id);

    if (!recipe) {
        return res.status(404).json({
            message: 'error: Recipe not found. Info not updated.'
        });
    }

    Object.assign(recipe, req.body);
    saveRecipeToFile();

    res.json({
        message: 'Additional info updated successfully.'
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
