import bbqChicken from './assets/bbq-chicken-wings.jpg'
import chocolatChip from './assets/chocolate-chip-cookies.png'
import dropBiscuit from './assets/drop-biscuits.jpg'
import './App.css'

function App() {

  return (
    <>
      <main id="main-content">
          <h1><b>Cards</b></h1>
          <div class="card-container">

              
              <article class= "card">
                  <img src= {bbqChicken} alt="Picture of BBQ Chicken Wings"/>
                  <h2 class= "title">
                      <b>BBQ Chicken Wings</b>
                  </h2>
                  <p class= "description">
                      Flavorful wings perfect for any occasion.
                  </p>

              
              <button class="dropdown-menu-button" 
              type="button"  
              aria-expanded="false" 
              aria-controls="bbq-chicken-wings-dropdown-menu">More Info</button>
                  <div class="dropdown-menu" 
                      id ="bbq-chicken-wings-dropdown-menu"
                      hidden
                      data-duration="45 minutes" 
                      data-difficulty="Medium" 
                      data-cuisine="Korean">
                  </div>
              </article>
              

              
              <article class= "card">
                  <img src={dropBiscuit} alt="Picture of Drop Biscuits"/>
                  <h2 class= "title">
                      <b>Drop Biscuits</b>
                  </h2>
                  <p class= "description">
                      Delicious breakfast for the whole family.
                  </p>

              
                  <button class="dropdown-menu-button" 
                  type="button" 
                  aria-expanded="false" 
                  aria-controls="drop-biscuits-dropdown-menu">More Info</button>
                      <div class="dropdown-menu" 
                          id ="drop-biscuits-dropdown-menu"
                          hidden
                          data-duration="60 minutes" 
                          data-difficulty="Easy" 
                          data-cuisine="English">
                      </div>
              </article>


              
              <article class= "card">
                  <img src={chocolatChip} alt="Picture of Chocolate Chip Cookies"/>
                  <h2 class= "title">
                      <b>Chocolate Chip Cookies</b>
                  </h2>
                  <p class= "description">
                      Delicious cookie recipe.
                  </p>

              
                  <button class="dropdown-menu-button" 
                  type="button" 
                  aria-expanded="false" 
                  aria-controls="chocolate-chip-cookies-dropdown-menu">More Info</button>
                      <div class="dropdown-menu" 
                          id ="chocolate-chip-cookies-dropdown-menu"
                          hidden
                          data-duration="20 minutes" 
                          data-difficulty="Easy" 
                          data-cuisine="American">
                      </div>    
              </article>

          </div>
          <script src="script.js"></script>
      </main>
    </>
  )
}

export default App
