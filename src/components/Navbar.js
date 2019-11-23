import React from 'react'
import './styles/Navbar.css';
import '../pages/styles/Badges.css';
import logo from '../images/logo.svg'
import logoPlatzi from '../images/platzi.png'
import pais from '../images/mx.png'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>

                <div className="contenedor">

                    <img src={logoPlatzi} alt="Logo platzi" height="50" />

                    <div className="panel">

                        <img src={pais} alt="País" height="30"></img>

                        <h6>MX</h6>
                        
                        <div className="menu">
                            <span>Cursos</span>|
                                <span>Blog</span>|
                                <span>FAQ</span>|
                                <span>Horarios</span>|
                                <span>Live</span>
                        </div>

                        <div className="Badge__buttons">
                            <a className="btn btn-primary">Iniciar sesión</a>
                        </div>

                    </div>

                </div>

                <div className="Navbar">
                    <div className="container-fluid">
                        <Link className="Navbar__brand" to="/">
                            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                            <span className="font-weight-light">Conference </span>
                            <span className="font-weight-bold" >badges</span>
                        </Link>
                    </div>
                </div>
            </div >

        )
    }
}

export default Navbar;
