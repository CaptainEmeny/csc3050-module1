import CardGenerator from './components/CardGenerator'

import SearchBar from './components/SearchBar'
import NavBar from "./components/NavBar"

import './Home.css'
import { useEffect, useState } from 'react'

function Home() {

    const [searchFilter, setSearchFilter]= useState("");

    useEffect(() => {
        console.log(searchFilter);

    },[searchFilter])


  return (
    <>
        <main id="main-content">
            <div className= "navBar">
                <NavBar/>
                <SearchBar setCard= {setSearchFilter}/>
            </div>
            <h1><b>Cards</b></h1>
            <CardGenerator/>
        </main>
    </>
    )
}

export default Home
