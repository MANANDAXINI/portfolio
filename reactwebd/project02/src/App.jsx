import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setcounter]=useState(5)
  //let counter=5;

  const addvalue=()=>{
    console.log("clicked",counter);
    
    setcounter(counter+1);
  }

  const removevalue=()=>{
    
    setcounter(counter-1);
  }
  
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addvalue}>ADD VALUE {counter}</button>
      <br />
      <button onClick={removevalue}>REMOVE VALUE {counter}</button>
      <p>footer</p>

    </>
  )
}

export default App
