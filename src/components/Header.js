import React, { Component } from 'react';
import logo from '../assets/images/logo.svg'
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    { /* <!-- LOGO --> */}
                    <div id="logo">
                        <NavLink activeClassName="active" to="/home">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>CRUD </strong>Artículos
                        </span>
                        </NavLink>
                    </div>

                    { /* <!-- MENU --> */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/home">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/blog">Todos los artículos</NavLink>
                            </li>
                            {
                            <li>
                                <NavLink activeClassName="active" to="/formulario">Contacto</NavLink>
                            </li>
                            /*
                            <li>
                                <NavLink activeClassName="active" to="/pagina-1">Pagina 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/Luis/Penaloza">Pagina 2</NavLink>
                            </li>
                            */}
                        </ul>
                    </nav>

                    { /* <!--LIMPIAR FLOTADOS--> */}
                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }

}

export default Header;