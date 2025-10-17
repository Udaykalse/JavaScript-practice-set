import React, { useState } from 'react'

function app2() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Plus</th>
                        <th>Result</th>
                        <th>Minus</th>
                        <th>Reset</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={() => setCount(count + 1)}>+</button></td>
                        <td>{count}</td>
                        <td><button onClick={() => setCount(count - 1)}>-</button></td>
                        <td><button onClick={() => setCount(0)}>=</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default app2
