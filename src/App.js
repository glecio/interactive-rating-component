import React from 'react'
import Number from './components/number/Number'
import ICO from './assets/favicon-32x32.png'
import './App.css'

const App = () => {
  return (
    <>
      <link rel="icon" type="image/png" href={ICO} />
      <div className="container">
        
        <div className="card">
          <h1>How did we do?</h1>
          <p></p>
          <Number /> 
          <button></button>
          </div>
        </div>
    </>
  )
}

export default App