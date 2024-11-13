import React, { useState } from 'react'

function Q3() {
    const[b,c]=useState('');
    function func1 (a) {
        console.log(a.target.value);
        c(a.target.value);
    }
  return (
    <div>
        <h1 style={{color:'white', backgroundColor:'yellow'}}>3. HI! {b}</h1>
      <textarea  style={{fontSize:'30px'}} value={b} onChange={func1}/>
      <p style={{color:'white', backgroundColor:'skyblue', fontSize:'50px'}}>character length: {b.length}</p>
      
    </div>
  )
}

export default Q3
