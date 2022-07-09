import React from 'react'
import './numbers.css'
import { useState } from 'react'


const Number = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
      <div className="numbers">
        <span onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > 1</span>
        <span onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > 2</span>
        <span onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > 3</span>
        <span onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>4</span>
        <span onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> 5</span>
      </div>
  )
}

export default Number