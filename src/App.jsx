import { useState } from 'react'
import logo from './assets/badobadi.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Bado Badi 🎵 </h1>
    <p>By Chahat Fateh Ali Khan</p>
    <img src="/src/assets/badobadi.gif" alt="" />
    </>
  )
}

export default App
