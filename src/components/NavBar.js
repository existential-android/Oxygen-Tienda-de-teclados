import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import '../assets/css/NavBar.css';

const NavBar = () => {
    return(
        <nav>
          <Link to="/"><h1>Oxygen</h1></Link>
          <ul>
            <li><Link to="/category/gamer" class="category">Gaming</Link></li>
            <li><Link to="/category/programacion" class="category">Programación</Link></li>
          </ul>
          <CartWidget/>
        </nav>
    )
}

export default NavBar