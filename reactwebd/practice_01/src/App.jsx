import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState('blue');

  return (
    <>
      <h1>My Favourite Color is:{}</h1>
    </>
  )
}

export default App
