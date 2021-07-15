import React, {useState}from 'react';
import {Link} from 'react-router-dom'

import Badge from '../Badge';
import DeleteBadgeModal from '../DeleteBadgeModal';

/* import confLogo from '../../images/platziconf-logo.svg' */
import './styles/BadgeDetails.css'

const BadgeDetails = (props) => {
    
    const [contador, setContador] = useState(0)
    const badge = props.badge;
    return ( 
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-6">
                                    <img /* src={confLogo} */ alt="Logo de la conferencia"/>
                                </div>
                                <div className="col-6 BadgeDetails__hero-attendant-name">
                                    <h1>{badge.firstName} - {badge.lastName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={badge.firstName} 
                                lastName={badge.lastName}
                                email={badge.email}
                                twitter={badge.twitter}
                                jobTitle={badge.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <button onClick={()=> setContador(contador +1)} className="btn btn-primary"> 
                                    Incrementar Numero
                                </button>
                                <p>{contador}</p>
                                <button onClick={()=> setContador(contador -1)} className="btn btn-primary"> 
                                    Decrementar Numero
                                </button>
                                <div>
                                    <Link className="btn btn-primary " to={`/badges/${badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={props.onOpenModal}
                                        >
                                        Remove
                                    </button>
                                    <DeleteBadgeModal 
                                        isOpen={props.modalOpen} 
                                        onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default BadgeDetails;