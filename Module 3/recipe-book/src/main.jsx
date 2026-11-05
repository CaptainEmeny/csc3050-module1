import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home/Home.jsx'
import RecipePage from './RecipePage/RecipePage.jsx'
import RandomRecipePage from './RandomPage/RandomPage.jsx'

import "./headers/Header.css"
import NavBar from './headers/NavBar.jsx'
import SearchBar from './headers/SearchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <div className= "headerBar">
        <NavBar/>
        <SearchBar/>
      </div>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/recipe-page" element={<RecipePage/>}/>
        <Route path="/random-recipe" element={<RandomRecipePage/>}/>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
