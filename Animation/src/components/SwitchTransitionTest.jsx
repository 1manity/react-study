import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './SwitchTransitionTest.css'; // 引入CSS文件

export function SwitchTransitionTest() {
    const [toggle, setToggle] = useState(false);

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={toggle}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames="fade"
            >
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "Goodbye, world!" : "Hello, world!"}
                </button>
            </CSSTransition>
        </SwitchTransition>
    );
}
