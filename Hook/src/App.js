import React from 'react';

import {UseEffectTest} from "./components/UseEffectTest";
import {useData} from "./hooks/useData";
import {UseContextTest} from "./components/UseContextTest";
import {UseCallbackTest} from "./components/UseCallbackTest";

function Test() {
    const d = useData()
    console.log("第一次渲染 " , d)
    return <></>
}

function App(props) {
    return (
        <UseCallbackTest></UseCallbackTest>
    );
}

export default App;
