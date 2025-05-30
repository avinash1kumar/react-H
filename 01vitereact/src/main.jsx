import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Variable from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>this is other method</h2>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com">google</a>
)

const anotherReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
    // <App /> // this is jsx

    // MyApp() // we can also write like this because it is also a function and react is also js and in js function call like this

    // anotherElement

    // anotherReactElement

    <Variable />
  
)



