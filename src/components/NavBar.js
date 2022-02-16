import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import '../assets/css/NavBar.css';

const NavBar = () => {
    return(
        <nav>
          <h1>Oxygen</h1>
          <ul>
            <li><a class="btn btn-outline-danger" href="#" role="button">Gamers</a></li>
            <li><a class="btn btn-outline-warning" href="#" role="button">Programación</a></li>
            <li><a class="btn btn-outline-info" href="#" role="button">Trabajo</a></li>
          </ul>
          <CartWidget/>
        </nav>
    )
}

export default NavBar