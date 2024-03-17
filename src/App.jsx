import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </>
  )
}

export default App
