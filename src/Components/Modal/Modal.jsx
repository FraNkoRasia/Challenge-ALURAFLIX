import React from 'react';
import './Modal.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Modal({ show, handleClose, children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
       <div className="modal-content">
      
      <button className="modal-close" onClick={handleClose}><IoMdCloseCircleOutline /> </button>
      {children}
      
    </div>
    </div>
  );
}

