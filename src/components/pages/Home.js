import React from 'react';
import { Link } from 'react-router-dom'
import home from '../../images/image-home.png'
/* import platziconfLogo from '../../images/platziconf-logo.svg'
import astronautsImage from '../../images/astronauts.svg' */
import './styles/Home.css'

const Home = () => {
    return (
        <div className="Home">
                <img
                    src={home}
                    alt="Rodri Event"
                    className="img-fluid mb-2"
                    width={500}
                />
  
                <h1 className="Home-title">Asisti al evento mas importante del año !</h1>
                <Link className="btn btn-primary" to="/badges">
                  Start
                </Link>
              </div>
      );
}
 
export default Home;