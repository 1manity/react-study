import React from "react";
import ReactDOM from "react-dom"

import MyFunc from "./MyFunc";
import MyClassFunc from "./MyClassFunc";


const container = document.getElementById('root')
ReactDOM.render(<><MyFunc number={2}></MyFunc><MyClassFunc number={3}></MyClassFunc></>,container)
