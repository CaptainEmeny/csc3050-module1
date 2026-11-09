import './Header.css'

function SearchBar({setCard}){

    const updateFilter = () => {
        const newFilter = document.getElementById("searchBar").value;
        setCard(newFilter);
    }


    return(
        <div id="searchBar">
            <button id= "searchButton"/>
            <input id= "searchInput" type="text" onChange={updateFilter}/>
        </div>
    );
}

export default SearchBar