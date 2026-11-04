const express = require("express");
const path = require('path');

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/test', (req, res) => {
    res.send('poopy pants');
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});