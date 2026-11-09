import GridCard from "./GridCard";
import { useEffect, useState } from "react";

function CardGenerator(){

    const [itemsLoaded, setItemsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const promise = await fetch("https://themealdb.com/api/json/v1/1/search.php?f=a");
        
        // Should return 200
        if (!promise.ok) {
          throw new Error(`Request failed with status ${promise.status}`);
        }

        //Parse data
        const data = await promise.json();

        //Set new states
        setItems(data.meals);
        setItemsLoaded(true);

      } catch (error) {
        
        //Log Error
        console.log(error);
      }
    }

    load();
  }, []);

    

  if (!itemsLoaded){return(<p>Loading..</p>)};

    return(
        <div className= "card-container"> 
            {items.map(r => (<GridCard key= {r.idMeal} recipe= {r}/>))}         
        </div>
    );
}

export default CardGenerator