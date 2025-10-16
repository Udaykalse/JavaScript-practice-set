import React, { useState } from 'react'

function app7() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count:- {count}</h1> <br />
            <button onClick={() => setCount(count + 1)}>Plus</button> <br /> <br />
            <button onClick={() => setCount(count - 1)}>Minus</button><br /> <br />
            <button
                onClick={() => setCount(0)}
            >Reset</button><br /> <br />
        </div>
    )
}

export default app7
