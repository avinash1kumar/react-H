import { useState } from 'react'   // we use hooks by importing 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(10)

  // let Counter = 13
  
  const addValue = () => {
    // console.log("add value")
    // value not more than 20
    // setCounter(Counter + 1)
    if(Counter < 20){
      setCounter(Counter + 1)
    }
  }

  const decreaseValue = () => {
    // value  not less than 0
    if(Counter > 0){
    setCounter(Counter - 1)
    }
  }

  document.getElementById 
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value</button>

    </>
  )
}

export default App
