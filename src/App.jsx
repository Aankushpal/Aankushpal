import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Career from './Component/Career'
import Contact from './Component/Contact'
import About from './Component/About'
import Home from './Component/Home'
import Nav from './Nav'

const App = () => {
  return (
    <>
 <Nav/>

      <Routes>
          <Route path='/Career' element={<Career/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App