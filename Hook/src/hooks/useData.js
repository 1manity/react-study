import {useEffect, useState} from "react";

async function getData(src) {
    return await fetch(src)
        .then((response) => response.json())
}

export function useData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async ()=> {
            const d = await getData("https://study.duyiedu.com/api/lyrics")
            setData(d)
        })()
    }, []);
    return data
}
