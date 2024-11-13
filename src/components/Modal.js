import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose}>
            &times;
        </button>
        {children}
      </div>
    </div>
    )
}
export default Modal;
