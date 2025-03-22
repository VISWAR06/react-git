import React from 'react'
import Itemlist from './Itemlist'

const Unlist = ({items,chng1,dlt}) => {
  return (
   
    <ul>
      {items.map((item)=>(
        <Itemlist
        item={item}
        chng1={chng1}
        dlt={dlt}
        key={item.id}
        />
      ))}

    </ul>

  
  )
}

export default Unlist