import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/NavBar.css'

const NavBar = () => {
    return(
        <nav>
          <h1>Oxygen</h1>
          <ul>
            <li><a class="btn btn-outline-danger" href="#" role="button">Inicio</a></li>
            <li><a class="btn btn-outline-warning" href="#" role="button">Teclados</a></li>
            <li><a class="btn btn-outline-info" href="#" role="button">Categorias</a></li>
          </ul>
        </nav>
    )
}

export default NavBar