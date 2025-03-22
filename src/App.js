import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState ,useEffect} from 'react';
import Additem from "./Additem";
import Srch from "./Srch";

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
     [] )
     useEffect(()=>{
      JSON.parse(localStorage.getItem("todo"))
     })
     
    
    const addItem=(item)=>{
      const id= items.length?items[items.length-1].id+1:1
      const addNewItem={id,checked:false,item}
      const listitems=[...items,addNewItem]
      setItems(listitems)
      localStorage.setItem("todo",JSON.stringify(listitems))
    }
    const[nwtm,setNwtm]=useState('')
    const changesubmite=(e)=>{
      e.preventDefault()
if(!nwtm)return

addItem(nwtm)
console.log(nwtm)
setNwtm('')
    }

   const chng1=(id)=>{
    const listitems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setItems(listitems)
    localStorage.setItem("todo",JSON.stringify(listitems))
   }
   const dlt=(id)=>{
    const listitems=items.filter((item)=>
      item.id!==id)
    setItems(listitems)
    localStorage.setItem("todo",JSON.stringify(listitems))
   }
   const [srch,setSrch]=useState('')

  return(
    <div>{/*  <Usestate/> */}

  <Header
  />
<Additem
nwtm={nwtm}
setNwtm={setNwtm}
changesubmite={changesubmite}
/><Srch srch={srch} setSrch={setSrch}/>
  <Content
  
  items={items.filter(item=>((item.item).toLowerCase()).includes(srch.toLowerCase()))}
  chng1={chng1}
  dlt={dlt}

  />

  <Footer
  length={items.length}/>
  
 
    </div>
  )
}
export default App