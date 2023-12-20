import React, {useCallback, useState} from "react";

class Child extends React.PureComponent {

    render() {
        console.log("Test Render")
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}
function Parent() {
    console.log("Parent render");
    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState(123);
    const handleClick =useCallback(() => {setTxt(Math.random())},[])
    return (
        <>
            <Child text={txt} onClick={handleClick}></Child>
            <input type="number" value={count} onChange={e=> {
                setCount(parseInt(e.target.value))
            }}
            />
        </>
    )
}

export function UseCallbackTest() {
    return (
        <Parent></Parent>
    )
}
