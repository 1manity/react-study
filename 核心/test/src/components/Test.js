import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
        new Promise((resolve, reject)=> {

            resolve(1)
        }).then(()=> {
            console.log(1)
            this.setState({
                n: 2
            })
        })

    }
    render() {
        return(<h1>
            qwe
        </h1>)
    }
}
