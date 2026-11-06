import CardGenerator from '../components/CardGenerator'

import './Home.css'

function Home() {

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
