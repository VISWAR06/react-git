import React from 'react'
import { useState } from 'react'

const List = () => {
  
  const [items,setItems]= useState(
    [{id:1,checked:true,item:"pc"},
      {id:2,checked:true,item:"ec"}

    ]
  )
  return (
   <main>
    <ul>
      {items.map((thing)=>{
        <li>
          <input type='checkbox'checked={thing.checked}/>
          <label>{thing.item}</label>
        </li>
      })}

    </ul>
   </main>
  )
}

export default List