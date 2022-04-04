import React from 'react'

import './Modal.css'

export default function Modal({children, style}) {
    return (
        <div className='Modal' style={style}>
            {children}
        </div>
    )
}
