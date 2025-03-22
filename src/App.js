import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState } from 'react';

function App(){
 /* const chg = () =>{
    const name=["hello","hi","how"]
    const int=Math.floor(Math.random()*name.length)
    return name[int]
  }
  function c(){
    const name=["not","in","out"]
    const int=Math.floor(Math.random()*name.length)
    return name[int]
  } */
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

  return(
    <div>{/*  <Usestate/> */}

  <Header
  />
  <Content
  items={items}
  chng1={chng1}
  dlt={dlt}

  />

  <Footer
  length={items.length}/>
 
    </div>
  )
}
export default App