import React from "react";

export default class MyClassFunc extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (<h1>{this.props.number}</h1>)
    }
}
