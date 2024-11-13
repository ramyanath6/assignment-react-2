// import React from 'react'

// const Q2 = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Q2




import { useState } from 'react'
import './App.css'

function Q2() {
    const[var1 ,func1]=useState('false');
  return (
    <>
     <h1 style={{ color: 'white', backgroundColor:'green' }} >2. welcome to the calender </h1>
     {var1? 'hello monday' : 'hello tuesday'}<br></br>
     <button  style={{ color: 'white', backgroundColor:'purple', fontSize:'20px'}} onClick={()=>func1(!var1)}>click</button>
    </>
  )
}

export default Q2
