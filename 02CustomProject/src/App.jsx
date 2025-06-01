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
      // these all treated all bunch. they all do same work ye sirf 1 hi add kare ga jab v add counter click hoga
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      setCounter(Counter + 1)
      setCounter(Counter + 1)
// so the useState( )hook has a setCounter function name can be differ but it schedules jobs in batches so all the instructions inside setCounter will be sent once altogether so it sees that all are repeated instructions so its gets executed only once. But in case of call back function syntax inside setCounter it immediately increments the value and when the next time it excutes it agian increments like that then it doesnt works in batches.
      setCounter(prevCounter => prevCounter + 1) // here prevCounter is callback
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)



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
