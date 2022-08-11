import React from 'react'
import "./App.css"
import Weather from './components/Weather'

function App() {
  return (
    <div className='app-container'>
        <h1 className='app-heading'>Weather App</h1>
        <Weather/>
    </div>
  )
}

export default App
