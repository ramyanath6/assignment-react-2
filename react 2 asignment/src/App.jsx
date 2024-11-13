import { useState } from 'react'
import Q2 from './Q2';
import Q3 from './Q3';
import './App.css'

function App() {
  const[comp1,comp2]=useState('')

  function func1(a){
    console.log(a.target.value);
    comp2(a.target.value);
  }
  return (
    <>
    <h1 style={{color:'white', backgroundColor:'pink'}}>1. Hello{comp1}</h1>
      <input style={{font:'20px'}} text='text' onChange={func1}/>
      <Q2/>
      <Q3/>
    </>
  )
}

export default App
