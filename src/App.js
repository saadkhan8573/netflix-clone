import React from 'react'
import './App.css'
import HomeScreen from './components/homepage/homescreen/HomeScreen'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <HomeScreen />
      </div>
    </>
  )
}

export default App
