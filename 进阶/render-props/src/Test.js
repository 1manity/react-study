import React, {Component} from 'react';
import MouseListener from "./MouseListener";

const renderMousePosition = ({x,y})=> (<h1>{x},{y}</h1>)

class Test extends Component {
    render() {
        return (
            <div style={{
                margin: '0 auto',
                height: 500,
                width: 500,
                border: '1px solid'
            }}>
                <MouseListener render={renderMousePosition}></MouseListener>
            </div>
        );
    }
}

export default Test;
