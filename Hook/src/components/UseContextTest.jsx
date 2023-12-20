import React, {useContext} from "react";

const ctx = React.createContext()

function Test() {
    const context = useContext(ctx);
    return (
        <div>
            {context}
        </div>
    )
}

export function UseContextTest() {

    return (
        <div>
            <ctx.Provider value={'abc'}>
                <Test></Test>
            </ctx.Provider>

        </div>
    )
}
