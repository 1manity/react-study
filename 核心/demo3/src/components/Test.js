import React from "react";
import {ThreeLayout} from "./ThreeLayout";

export default class Test extends React.Component{

    state = {
        showModal: false

    }
    hideModal = ()=> {
        this.setState({
            showModal: false
        })
    }
    showModal = ()=> {
        this.setState({
            showModal: true
        })
    }
    render() {
        return (
            // <div>
            //     <img src={'https://1manity.top/10.jpg'} alt={''}/>
            //     {
            //         this.state.showModal ?
            //             (
            //                 <Modal onClose={this.hideModal}>
            //                     123
            //                 </Modal>
            //             ):
            //             null
            //     }
            //     <button onClick={this.showModal}>show</button>
            // </div>
            <div>
                <ThreeLayout left={<div>123</div>}>1234</ThreeLayout>
            </div>
        );
    }
}
