import CardGenerator from './components/CardGenerator'

import './App.css'

function App() {

  return (
    <>
        <main id="main-content">
            <h1><b>Cards</b></h1>
            <div className= "card-container"> 
                <CardGenerator/>
            </div>
            <script src="script.js"></script>
        </main>
    </>
    )
}

export default App
