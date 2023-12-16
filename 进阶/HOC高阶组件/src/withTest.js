import React from 'react';

function withTest(Comp) {
    return class extends React.Component {
        render() {
            return <Comp {...this.props}></Comp>
        }
    }
}

export default withTest;

function A() {
    return <div>123</div>
}

const B = withTest(A)
