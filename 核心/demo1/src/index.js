import React from "react";
import ReactDOM from "react-dom"
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

import './index.css'

const container = document.getElementById('root')

let index = 1

const srcs= [img1,img2,img3]
function render() {
    ReactDOM.render(<img src={srcs[index]} alt=""/>, container);
}
let timer
function start() {
    clearInterval(timer)
    timer = setInterval(()=> {
        index = (index + 1) % 3
        render()
    },2000)
}
function stop() {
    clearInterval(timer)
}
render()
start()

container.onmouseenter = function () {
    stop()
}
container.onmouseleave = function () {
    start()
}
