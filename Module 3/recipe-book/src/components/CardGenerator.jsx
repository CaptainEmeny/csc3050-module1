import GridCard from "./GridCard";
import recipes from "../assets/recipes.json"


function CardGenerator(){

    

    return(
        <div className= "card-container"> 
            {recipes.recipes.map(r => (<GridCard recipe = {r}/>))}         
        </div>
    );
}

export default CardGenerator