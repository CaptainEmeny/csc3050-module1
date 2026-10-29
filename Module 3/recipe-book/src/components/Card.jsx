function Card({recipe}){
    

    return(
        <>
            <article key ={recipe.id} className= "card">
                <img src= {"/recipe-images/" + recipe.img} alt= {"Picture of " + recipe.name}/>
                <h2 className= "title">
                    <b>{recipe.name}</b>
                </h2>
                <p className= "description">
                    {recipe.description}
                </p>

                
                <button className="dropdown-menu-button" 
                type="button"  
                aria-expanded="false" 
                aria-controls={recipe.id + "-dropdown-menu"}>More Info</button>
                <div className="dropdown-menu" 
                    id = {recipe.id + "-dropdown-menu"}
                    hidden
                    data-duration= {recipe.duration} 
                    data-difficulty= {recipe.difficulty}
                    data-cuisine= {recipe.cuisine}>
                </div>
            </article>        
        </>
    );
}

export default Card