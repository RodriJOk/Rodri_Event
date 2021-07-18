import React from 'react'
import "./styles/Badge.css"
import "../global.css"

/* import conflogo from "../images/badge-header.svg"; */
import Gravatar from './Gravatar'

class Badge extends React.Component{
    render() { 
    return(
         <div className="Badge">
            <div className="Badge__header">
                <span>Tus datos</span>
                {/* <img src={conflogo}  alt="Logo de la conferencia"/> */}
            </div>
            <div className="Badge__section-name">
                <Gravatar 
                    className="Badge__avatar" 
                    email= {this.props.email} 
                    alt="Avatar"/>
                <h1>{this.props.lastName}, <br/>{this.props.firstName} </h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <span>@{this.props.twitter}</span>
            </div>
            {/* <div className="Badge__footer">
                <p>#{this.props.evento}</p>
            </div> */}
         </div>
     )   
    }
}

export default Badge;