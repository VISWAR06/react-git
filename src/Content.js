import React from 'react'
import { useState } from 'react';
import {FaTrashAlt } from "react-icons/fa";

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
  const chng1=(id)=>{
   setItems(items.map((item)=>
  item.id===id?{...item,checked:!item.checked}:item))
  }
  const dlt=(id)=>{
    setItems(items.filter((item)=>item.id!==id))
  }
  return (
   <main>{(items.length)?(
    <ul>
      {items.map((item)=>(
        <li className='item' key={item.id}>
          <input type='checkbox'
           onChange={()=>chng1(item.id)}
          checked={item.checked}/>
          <label>{item.item}</label>
          <FaTrashAlt
          onClick={()=>dlt(item.id)}
          role="button"
          tabIndex="0"
          />
        </li>
      ))}

    </ul>
   ):<p>list is empty</p>
  }
   </main>
  )
}

export default Content