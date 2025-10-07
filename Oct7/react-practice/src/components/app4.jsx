import React, { useState } from 'react'

const app4 = () => {
  const [plus , setPlus]=useState(0);
  return (
    <div>
      <span>{plus}</span>
      <button onClick={()=>setPlus(plus+1)}>+</button>
    </div>
  )
}

export default app4
