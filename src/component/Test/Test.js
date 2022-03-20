import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0)

    const Plus = () => {
        const newNum = count + 1
        setCount(newNum)
    }
    const Minus = () => {
        setCount(count - 1)
    }
    if (count < 0) {
        setCount(0)
    }


    return (
        <div>
            <h1>This is test</h1>
            <h1>{count}</h1>
            <button onClick={Plus} className='ms-3 p-3 border-0 rounded'>+</button>
            <button onClick={Minus} className='ms-3 p-3 border-0 rounded'>-</button>
        </div>
    );
};

export default Test;