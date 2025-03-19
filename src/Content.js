import React from 'react'
import { useState } from 'react';

const Content = () => {
    function cll(){
        const name=["money","kind","love"];
        const int=Math.floor(Math.random()*name.length);
        setName(name[int])
    }
    /* const onclicke=()=>{
        console.log("u clicked")
    }
    function onc(names){
        console.log(`hi there ${names}`)
    }
    const onc3=(e)=>{
        console.log(e.target.innerText)
    } */
  
        const [name,setName]=useState("money")
        
  return (
    <main>
     {/*    <p onDoubleClick={()=>{onclikec()}}>lets grow</p> */}
    <p >lets grow {name}</p>
    <button onClick={cll}>clik</button>
   {/*  <button onClick={()=>onclicke()}>click it</button>
   {/*  <button onClick={()=>onc('viswa')}>click it2</button>
    <button onClick={(e)=>onc3(e)}>click it3</button> */} 

    </main>
  )
}

export default Content