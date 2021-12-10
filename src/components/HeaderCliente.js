import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HeaderCliente = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    const [menuColapsado, setMenuColapsado] = useState(true)

    const accionaNav = () => {
        setMenuColapsado(!menuColapsado)
    }

    return (
        <nav id="header" className="cristal navbar navbar-expand-md text-dark fixed-top navbar-light">
            <Link className="navbar-brand text-success" to="/"><i className="fab fa-contao display-4"></i></Link>
            <Link className="nav-item nav-link bg-transparent text-success border-bottom border-success pb-2" to="/NuevoEnvio">Enviar</Link>
            <button className="navbar-toggler" onClick={accionaNav} type="button" data-toggle="collapse" data-target="#navbarsExample03">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className={"navbar-collapse navbar-nav mr-auto " + (menuColapsado ? "collapse" : "")} id="navbarsExample03">
                <li className="nav-item active">
                    <Link className="nav-link" to="/Seguimiento">Seguimiento <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="#">Soluciones logísticas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Tarifas">Tarifas</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle ml-2 ml-md-0" to="#" id="dropdown03" data-toggle="dropdown">Empresa</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Quienes somos</Link>
                        <Link className="dropdown-item" to="#">Servicios</Link>
                        <Link className="dropdown-item" to="#">Trabaja con nosotros</Link>
                    </div>
                </li>
                <li className="ml-md-auto mx-md-3 nav-item">
                    <Link className="my-2 my-md-0 text-dark" to="/Acceso">Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}

HeaderCliente.defaultProps = {
    title: 'Task Tracker',
}

HeaderCliente.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeaderCliente
