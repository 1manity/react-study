import React from "react";
import ReactDOM from "react-dom"

const a = 10;
const b = 20;

const div = (
    <h1>
        {a} * {b} = {a * b}
        <p>
            {/* 123 */}
            {null}
            {undefined}
            {false}
        </p>
        <div style={{
            background:'red',
            width: 100,
            height: 100,
            borderRadius: 50,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>style</div>
    </h1>
)
ReactDOM.render(div, document.getElementById('root'));
