
import React from "react";

import './index.css'

export default function Index({bg='rgba(0,0,0,.5)',children = '',onClose} = {}) {
    return (
        <div onClick={(e)=> {
            if (e.target.className === 'modal') {
                onClose()
            }
        }} className={"modal"} style={{
            background: bg
        }}>
            <div className="modal-center">
                {children}
            </div>
        </div>
    )
}
