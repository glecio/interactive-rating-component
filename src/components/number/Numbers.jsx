import React from 'react'
import './numbers.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Number = ({sendChildToParent} ) => {
  const [isActive, setIsActive] = useState('5');
 

  useEffect(() => {
    sendChildToParent(isActive)
  }, []);

  const handleClick = (event) => {
    sendChildToParent(event.target.getAttribute('value'))
    const rating = event.target.getAttribute('value')
    setIsActive(rating);
  }

  return (
    <div>
      <ul className="numbers">
        <li onClick={handleClick} value='1' className={isActive === '1' ? 'active' : ''}>1</li>
        <li onClick={handleClick} value='2' className={isActive === '2' ? 'active' : ''}>2</li>
        <li onClick={handleClick} value='3' className={isActive === '3' ? 'active' : ''}>3</li>
        <li onClick={handleClick} value='4' className={isActive === '4' ? 'active' : ''}>4</li>
        <li onClick={handleClick} value='5' className={isActive === '5' ? 'active' : ''}>5</li>
      </ul>
    </div>
  )
}

export default Number