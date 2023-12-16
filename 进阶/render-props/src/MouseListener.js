import React, {useState} from 'react';

function MouseListener({render}) {
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouseMove = (e)=> {
        setPosition({x:e.clientX,y: e.clientY})
    }

    return (
        <div onMouseMove={handleMouseMove} style={{height: '100%'}}>
            {render(position)}
        </div>
    );
}

export default MouseListener;
