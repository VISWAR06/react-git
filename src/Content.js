import React from 'react'
import { useState } from 'react';

const Content = () => {
    /* function cll(){
        const name=["money","kind","love"];
        const int=Math.floor(Math.random()*name.length);
        return(name[int])
    }

    const onclicke=()=>{
        console.log("u clicked")
    }
    function onc(names){
        console.log(`hi there ${names}`)
    }
    const onc3=(e)=>{
        console.log(e.target.innerText)
    }
  const no=[4,5,23,-12]
  const items=no.filter(n=>n>0).map(n=>({numer:n}))
  console.log(items)
         */
  /* 
   */

 const [items,setItems]= useState(
    [{id:1,checked:true,item:"pc"},
      {id:2,checked:true,item:"ec"},
      {id:3,checked:false,item:"mc"}

    ]
  )
  return (
   <main>
    <ul>
      {items.map((item)=>(
        <li>
          <input type='checkbox' 
          checked={item.checked}/>
          <label>{item.item}</label>
          <button>delete</button>
        </li>
      ))}

    </ul>
   </main>
  )
}

export default Content