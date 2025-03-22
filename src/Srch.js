import React from 'react'

const Srch = ({Srch,setSrch}) => {
  return (
   <form className='srch' onSubmit={(e)=>e.preventDefault}>
<label htmlFor='serach'>serach</label>
<input type='text'id='search'role="searchbox"placeHolder='schr item'
value={Srch}
onChange={(e)=>setSrch(e.target.value)}/>

   </form>
  )
}

export default Srch