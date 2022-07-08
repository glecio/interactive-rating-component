import React from 'react'
import './number.css'
import { useState } from 'react'


const Number = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <>
      <a href="#1" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > 1</a>
      <a href="#2" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > 2</a>
      <a href="#3" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > 3</a>
      <a href="#4" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>4</a>
      <a href="#5" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> 5</a>
    </>
  )
}

export default Number