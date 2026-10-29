import importedRecipes from "../assets/recipes.json"
import { useState } from "react";
import Card from "./Card";

function CardGenerator(){

    const [recipes, setRecipes] = useState(importedRecipes.recipes);
    

    return(
        <>
        
        {recipes.map(r => (
            <Card recipe = {r}/>
        ))}         
        </>
    );
}

export default CardGenerator