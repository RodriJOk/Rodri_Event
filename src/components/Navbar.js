import React from "react";
/* import logo from "../images/logo.svg" */
import "./styles/Navbar.css"
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() { 
        return ( 
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        {/* <img className="Navbar__brand-logo" src={logo} alt="Logo Platzi Conf" /> */}
                        {/* <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span> */}
                        <p>RodriEvent</p>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default Navbar;