import React from "react";
import ReactDOM from "react-dom"

import Tick from './components/Tick'
import TickClass from "./components/TickClass";

var num =  60
const container = document.getElementById('root')
// let timer
// function start() {
//     timer = setInterval(()=> {
//         num--
//         if (num === 0) {
//             clearInterval(timer)
//         }
//         ReactDOM.render(<><Tick number={num}></Tick></>,container)
//
//     },1000)
// }

ReactDOM.render(<><TickClass number={num}></TickClass></>, container)



