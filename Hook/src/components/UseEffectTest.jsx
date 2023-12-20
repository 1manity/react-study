import React, {useEffect, useState} from "react";

export function UseEffectTest() {
    const [n, setN] = useState(0);

    useEffect(() => {
        console.log(1)
    });

    return (
        <div>
            <span>{n}</span>
            <button onClick={()=>setN(pre=> pre + 1)}>+</button>
        </div>
    )
}
