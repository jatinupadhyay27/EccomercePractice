import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Mens from './components/Pages/Mens'
import Womens from './components/Pages/Womens'
import Livings from './components/Pages/Livings'
import Child from './components/Pages/Child'

function AppRoutes() {
  return (
    <>
    <BrowserRouter >
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Mens" element={<Mens />}/>
        <Route path='/Womens' element={<Womens/>}/>
        <Route path='/Child' element={<Child/>}/>
        <Route path='/Livings' element={<Livings/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes