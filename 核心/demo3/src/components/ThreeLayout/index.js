import React from "react";

import "./index.css"

export const ThreeLayout = ({ leftWidth =200 , rightWidth = 200 , minWidth = 800 , left , right , children}) => {
    return (
        <div className={"three-layout"} style={{minWidth}}>
            <div className={"main"}>{children}</div>
            <div className={"aside-left"} style={{width: leftWidth}}>{left}</div>
            <div className={"aside-right"} style={{width: rightWidth}}>{right}</div>
        </div>
    )
}

