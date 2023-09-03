import React from 'react'
import ReactDOM from 'react-dom'

// Modal no esta en uso pero posteriormente se podria usar para hacer aparecer un menu o algo parecido
    
function Modal({ children }) {
    return ReactDOM.createPortal(
    <div className='Modal'>
        {children}
    </div>,
    document.getElementById("modal")
    );
}

export { Modal };