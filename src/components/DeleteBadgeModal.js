import React from 'react';
import Modal from './Modal';

import './styles/DeleteBadgeModal.css'

const DeleteBadgeModal = props => {
    return(
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="DeleteBadgeModal">
                <h2 className="DeleteBadgeModal__title">¿Estas seguro?</h2>
                <p className="DeleteBadgeModal__subtitle">¡Estas a punto de borrar un asistente del evento!</p>
                <div className="DeleteBadgeModal__section">
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
                        Borrar 
                    </button>
                    <button onClick={props.onClose} className="btn btn-primary mr-4">
                        Cancelar 
                    </button>
                </div>
            </div>
        </Modal>
    )
}
 
export default DeleteBadgeModal;