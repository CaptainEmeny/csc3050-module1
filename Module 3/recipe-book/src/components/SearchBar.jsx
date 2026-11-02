import './SearchBar.css'

function SearchBar({setCard}){

    const updateFilter = () => {
        const newFilter = document.getElementById("searchBar").value;
        setCard(newFilter);
    }


    return(
        <div>
            <input  id="searchBar" type="text" onChange={updateFilter}/>
        </div>
    );
}

export default SearchBar