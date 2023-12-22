import React, {useEffect, useRef, useState} from "react";

export function UseRefTest() {
    const [count, setCount] = useState(10);
    const nRef = useRef(count);
    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current--
            setCount(nRef.current);
            if (nRef.current === 0) {
                clearInterval(timer)
            }
        },1000)
        return ()=> {
            clearInterval(timer)
        }
    },[])
    // const timeRef = useRef(0);
    // useEffect(() => {
    //     if (count === 0) {
    //         return
    //     }
    //     timeRef.current = setTimeout(()=> {
    //         console.log(count)
    //         setCount(count - 1);
    //     },1000)
    //     return () => {
    //         clearTimeout(timeRef.current)
    //     };
    // }, [count]);

    return (
        <h1>{count}</h1>
    )
}
