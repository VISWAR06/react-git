import React from 'react'

import Unlist from './Unlist';

const Content = ({items,chng1,dlt}) => {
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

 
  return (
   <main>{(items.length)?(
    <Unlist
    items={items}
  chng1={chng1}
  dlt={dlt}
    />
   ):<p>list is empty</p>
  }
   </main>
  )
}

export default Content