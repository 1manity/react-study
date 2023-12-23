import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";

import './CSSTransitionTest.css'

export function CSSTransitionTest() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <CSSTransition
                timeout={1000}
                in={visible}
            >
                <h1>
                    test
                </h1>
            </CSSTransition>
            <button type="button" onClick={() => setVisible(!visible)}>
                Click to Enter
            </button>
        </div>
    )
}
