import React, { useState } from 'react';
import useDocTitle from './useDocTitle';


function Hooks() {
    const [count, setCount] = useState(0);
    useDocTitle(`Count ${count}`);
    return (
        <button onClick={() => setCount(p => p + 1)}>Count: {count}</button>
    )
}

export default Hooks