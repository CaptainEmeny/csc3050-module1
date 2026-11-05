const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicPath));

let savedRecipes = [];

const port = 3000;

try {
    const data = fs.readFileSync(
        'saved-recipes.json',
        'utf8'
    );
    savedRecipes = JSON.parse(data);
} catch {
    console.log('No saved recipes. Cookbook is empty.');
}

function saveRecipeToFile() {
    fs.writeFile(
        'saved-recipes.json', 
        JSON.stringify(savedRecipes, null, 2), (err) => {
        if (err) {
            console.error('Error saving recipe:', err);
        } else {
            console.log('Recipe saved successfully.');
        }
    });
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

app.post('/save-recipe', express.json(), (req, res) => {
    console.log("POST /save-recipe hit");
    console.log(req.body);
    
    const recipe = req.body;
    savedRecipes.push(recipe);
    saveRecipeToFile();
    res.status(201).json({ message: 'Recipe saved successfully.' });
});

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});