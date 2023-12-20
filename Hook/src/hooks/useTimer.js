import {useEffect} from "react";

export function useTimer(func,duration) {

    useEffect(() => {
        const timer = setInterval(func,duration)
        return () => {
            clearInterval(timer)
        };
    }, []);

}
