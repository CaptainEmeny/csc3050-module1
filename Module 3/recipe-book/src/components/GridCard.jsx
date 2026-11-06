import { Link } from "react-router-dom"; 

function GridCard({recipe}){




    return(
        <Link to= {`/recipes/${recipe.idMeal}`} className="linkStyle">
            <article key ={recipe.id} className= "card">
                <img src= {recipe.strMealThumb} alt= {"Picture of " + recipe.name}/>
                <h2 className= "title">
                    <b>{recipe.strMeal}</b>
                </h2>
                <p className= "description">
                    {recipe.strCategory}
                </p>

                
                <button className="save-button" 
                type="button"  
                aria-expanded="false" 
                aria-controls={recipe.id + "-dropdown-menu"}>Save Recipe</button>

            </article>        
        </Link>
    );
}

export default GridCard