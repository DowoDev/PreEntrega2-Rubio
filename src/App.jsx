import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Producto from './pages/Producto'
import Categoria from './pages/Categoria'
import Footer from './components/Body/Footer'
import LoadingAnimation from './components/Animation/LoadingAnimation'


const App = () => {
  return (
    <>
    <LoadingAnimation />
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/category/:categoria' element={<Categoria />} />
        <Route path='/producto/:id' element={<Producto />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App