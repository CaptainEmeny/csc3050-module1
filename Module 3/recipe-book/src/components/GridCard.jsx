import { Link } from "react-router-dom"; 
import { isInServer, deleteFromServer, postToServer } from "../Home/helpers/connect_to_server";

function GridCard({recipe}){

    //Decides whether an item is saved or deleted from the server
    const toggleSaved = async() => {

        if (await isInServer(recipe.idMeal)){ //Remove if the id is in the server.
            deleteFromServer(recipe);
        } else {
            postToServer(recipe);
        }       
    }

    return(
        <div>
            <Link to= {`/recipes/${recipe.idMeal}`} className="linkStyle">
                <article key ={recipe.id} className= "card">
                    <img src= {recipe.strMealThumb} alt= {"Picture of " + recipe.name}/>
                    <h2 className= "title">
                        <b>{recipe.strMeal}</b>
                    </h2>
                    <p className= "description">
                        {recipe.strCategory}
                    </p>
                </article>        
            </Link>

                <button className="save-button" 
                    type="button"  
                    onClick={() => toggleSaved()}>
                </button>
        </div>
    );
}

export default GridCard