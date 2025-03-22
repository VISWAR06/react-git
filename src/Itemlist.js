import React from 'react'
import {FaTrashAlt } from "react-icons/fa";

const Itemlist = ({item,chng1,dlt}) => {
  return (
   
        <li className='item' key={item.id}>
          <input type='checkbox'
           onChange={()=>chng1(item.id)}
          checked={item.checked}/>
          <label>{item.item}</label>
          <FaTrashAlt
          onClick={()=>dlt(item.id)}
          role="button"
          tabIndex="0"
          arial-label={`Delete ${item.item}`}
          />
        </li>
    
  )
}

export default Itemlist