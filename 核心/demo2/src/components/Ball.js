import React from "react";

import './Ball.css'

export default class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: this.props.left || 0,
            top: this.props.top || 0,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed,
            background: this.props.background || 'red'
        }
        const duration = 16

        setInterval(()=> {
            const xDis = this.state.xSpeed * duration / 1000
            const yDis = this.state.ySpeed * duration / 1000
            let newLeft = this.state.left + xDis
            let newTop = this.state.top + yDis
            if (newLeft <= 0) {
                newLeft = 0
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            else if(newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100
                this.setState( {
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newTop <= 0) {
                newTop = 0
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            else if(newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100
                this.setState( {
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        },duration)
    }

    render() {
        return (
            <div className={"ball"} style={{
                left: this.state.left,
                top: this.state.top,
                background: this.state.background || '#f40'
            }}>

            </div>
        );
    }
}
