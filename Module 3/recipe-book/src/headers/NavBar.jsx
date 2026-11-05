import './Header.css'
import { Link } from 'react-router-dom';

function NavBar(){

    return(
        <div id="navBar">
            <Link className="navBarBox" to="/">Home</Link>
            <Link className="navBarBox" to="/recipe-page">Recipe Page</Link>
            <Link className="navBarBox" to="/random-recipe">Random Recipe</Link>
        </div>
    );
}

export default NavBar