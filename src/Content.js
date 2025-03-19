import React from 'react'

const Content = () => {
    function cll(){
        const name=["money","kind","kid"];
        const int=Math.floor(Math.random()*name.length);
        return name[int];
    }
  return (
    <div>
    <p>lets grow {cll()}</p>
    </div>
  )
}

export default Content