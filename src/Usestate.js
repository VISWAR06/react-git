import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    const [count,setcount]=useState(50);
    const incre=()=>{
        setcount(count=>count+1)
    }
    const decr=()=>{
        setcount(count=>count-1)
    }
  return (
    <main>
        <button onClick={incre}>+</button>
        <span>{count}</span>
        <button onClick={decr}>-</button>
    </main>
  )
}

export default Usestate