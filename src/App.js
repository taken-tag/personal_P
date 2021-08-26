import React from 'react'
import Topbar from './Topbar'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Works from './Works'
import Testimonials from './Testimonials'
import Contact from './Contact'
import { useState } from 'react'
import Menu from './Menu'

import "./App.scss"

  
function App() {
  const[menuOpen, setmenuOpen]= useState(false)
  return (
    
    <div className="app">
    <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <Menu  menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <div className="sections">
     <Intro/>
     <Portfolio/>
     <Works/>
     <Testimonials/>
     <Contact/>
    </div>
    </div>
  )
}

export default App

