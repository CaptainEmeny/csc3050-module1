import "./RandomPage.css"


function RecipePage() {

  return (
    <>

        <main id="main-content">
            <div id = "recipe-header">


            </div>
            <h1><b>RANDOM SLOP PAGE</b></h1>

            <div id="div-container">


                <div id="recipe-card">
                <img src="recipe-images/slop.jpg" alt="Picture of yummy slop" id="recipe-card-image"/>
                </div>
                
                <div id="ingredients-container">
                    <h2 id="recipe-header"><b>Ingredients</b></h2>
                    <ul id="recipe-ingredients">
                        <li>1 cup of rice</li>
                        <li>1 cup of water</li>
                        <li>1/2 cup of soy sauce</li>
                        <li>1/4 cup of brown sugar</li>
                        <li>1 teaspoon of ginger</li>
                        <li>1 teaspoon of garlic</li>
                        <li>2 tablespoons of corn starch</li>
                        <li>2 chicken breasts, cooked and shredded</li>
                        <li>2 cups of mixed vegetables (broccoli, carrots, bell peppers)</li>
                    </ul>


                </div>

                <div id="instructions-container"> 
                    <p id="recipe-instructions"> Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\n
                        Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. 
                        Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\n
                        Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth.
                        Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce 
                        starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. 
                        Pour one cup of the sauce over top of chicken. Place chicken in oven and 
                        bake 35 minutes or until cooked through. Remove from oven and shred chicken in the 
                        dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\n
                        Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining 
                        sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the 
                        casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven 
                        and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!</p>

                </div>
            </div>
        </main>
        </>
    )
}

export default RecipePage
