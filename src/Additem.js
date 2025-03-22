import React from 'react'

const Additem = ({nwtm,setNwtm,changesubmite}) => {
  return (
   <form onSubmit={changesubmite}>
    <label htmlFor='additem'>add item</label>
    <input 
    value={nwtm}
        onChange={(e)=>setNwtm(e.target.value)}
        autoFocus
        required
        id="additem"
        type="text"
        placeHolder="type"/>
        <button type="submit">submit</button>
   </form>
  )
}

export default Additem