import React from 'react'

const Content = () => {
    function cll(){
        const name=["money","kind","kid"];
        const int=Math.floor(Math.random()*name.length);
        return name[int];
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
  return (
    <main>
    <p>lets grow {cll()}</p>
    <button onClick={()=>onclicke()}>click it</button>
    <button onClick={()=>onc('viswa')}>click it2</button>
    <button onClick={(e)=>onc3(e)}>click it3</button>
    </main>
  )
}

export default Content