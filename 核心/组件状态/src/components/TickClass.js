import React from "react";

export default class TickClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: this.props.number
        }
        this.timer = setInterval(()=> {
            this.setState({
                left: this.state.left - 1
            })
            if (this.state.left === 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }
    render() {
        return (
            <h1>
                剩余时间：{this.state.left}
            </h1>
        )
    }
}
