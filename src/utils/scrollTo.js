import React, { useRef } from 'react';

const ScrollDemo = () => {
    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <> 
            <div ref={myRef}>Element to scroll to</div> 
            <button onClick={executeScroll}>Click to scroll</button> 
        </>
    );
};

export default ScrollDemo;
