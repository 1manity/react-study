import React, {useState} from "react";

export function UseStateTest() {
    const [state, setState] = useState(0);

    console.log(state)
    return (
        <div>
            <button onClick={()=>setState(state-1)}>-</button>
            <span>{state}</span>
            <button onClick={()=>setState(n=>n+1)}>+</button>
        </div>
    )
}
