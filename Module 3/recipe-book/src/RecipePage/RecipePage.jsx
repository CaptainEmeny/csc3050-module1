import { useParams } from "react-router-dom"

import { useState, useEffect } from "react";

import "./RecipePage.css"


function RecipePage() {

  const [mealFound, setMealFound] = useState("loading");
  const [meal, setMeal] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function load() {
      try {
        const promise = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        
        // Should return 200
        if (!promise.ok) {
          throw new Error(`Request failed with status ${promise.status}`);
        }


        //Parse data
        const data = await promise.json();

        //Set new states
        setMeal(data.meals[0]);
        setMealFound(true);

      } catch (error) {
        
        //Log Error
        setMealFound("error")
        console.log(error);
      }
    }

    load();
  }, [id]);

  if (mealFound == "loading"){
    return(<h2>Loading</h2>);
  }

  if (mealFound == "error"){
    return(<h2>There was an error finding this meal, please try again.</h2>);
  }


          console.log(meal);


  return (
    <>
        <main id="main-content">
            <div id = "recipe-header">


            </div>
            <h1><b>{meal.strMeal}</b></h1>

            <div id="div-container">


                <div id="recipe-card">
                    <img src={meal.strMealThumb} alt= {`Picture of ${meal.strMeal}`} id="recipe-card-image"/>
                </div>
                
                <div id="ingredients-container">
                    <h2 id="recipe-header"><b>Ingredients</b></h2>
                    <ul id="recipe-ingredients">
                        <li>sorry didn't have time to fix this :/</li>
                    </ul>


                </div>

                <div id="instructions-container"> 
                    <p id="recipe-instructions"> {meal.strInstructions} </p>

                </div>
            </div>
        </main>
        </>
    )
}

export default RecipePage
