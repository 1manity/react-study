import React, {Component} from "react";
import {getRandom} from "../util";
import Ball from "./Ball";

export default class BallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballInfoes: []
        }
        this.timer = setInterval(()=> {
            var info = {
                left: getRandom(0, document.documentElement.clientWidth-100),
                top: getRandom(0, document.documentElement.clientHeight-100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                background: `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            }
            this.setState({
                ballInfoes: [...this.state.ballInfoes,info]
            })
            if (this.state.ballInfoes.length >= 25) {
                clearInterval(this.timer)
            }
        },1000)
    }

    render() {
        const balls = this.state.ballInfoes.map((item,i)=><Ball key={i} {...item}/>)
        return (
            <>
                {balls}
            </>
        )
    }
}
