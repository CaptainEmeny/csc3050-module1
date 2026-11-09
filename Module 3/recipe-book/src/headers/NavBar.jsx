import './Header.css'
import { Link } from 'react-router-dom';

function NavBar(){

    return(
        <div id="navBar">
            <Link className="navBarBox" to="/">Home</Link>
            <Link className="navBarBox" to="/random-recipe" reloadDocument>Random Recipe</Link>
        </div>
    );
}

export default NavBar