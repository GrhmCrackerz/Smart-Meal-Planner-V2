// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeButtom} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      width: '400px',
      maxWidth: '90%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: '#ddd',
      border: 'none',
      padding: '0.5rem',
      cursor: 'pointer',
    },
  };

  export default Modal;