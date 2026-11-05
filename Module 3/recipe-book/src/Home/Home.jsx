import CardGenerator from '../components/CardGenerator'

import SearchBar from '../headers/SearchBar'
import NavBar from "../headers/NavBar"

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
            <h1><b>Recipe Hub</b></h1>
            <CardGenerator/>
            <h2 className="title">Your home for 200+ delicious recipes. Updated daily!</h2>
        </main>
        
    </>
    )
}

export default Home
