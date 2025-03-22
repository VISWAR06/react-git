import React from 'react'
import { useRef } from 'react'
const Additem = ({nwtm,setNwtm,changesubmite}) => {
    const idref=useRef()
  return (
   <form onSubmit={changesubmite}>
    <label htmlFor='additem'>add item</label>
    <input 
    value={nwtm}
        onChange={(e)=>setNwtm(e.target.value)}
        autoFocus
        ref={idref}
        required
        id="additem"
        type="text"
        placeHolder="type"/>
        <button type="submit"
        onClick={()=>idref.current.focus()}>submit</button>
   </form>
  )
}

export default Additem