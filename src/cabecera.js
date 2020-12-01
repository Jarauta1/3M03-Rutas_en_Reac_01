import {Link} from "react-router-dom"

function Cabecera () {
    return (<>
    <h1>Rutas en React</h1>
    <p>Estamos en el ejercicio 1</p>
    <ol>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li><Link to="/nombres">Nombres</Link></li>
    </ol>
    </>)
}

export default Cabecera;
