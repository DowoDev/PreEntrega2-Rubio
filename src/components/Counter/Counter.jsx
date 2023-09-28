import React, { useState } from 'react'
import { IconSquareRoundedPlusFilled } from '@tabler/icons-react';
import { IconSquareRoundedMinusFilled } from '@tabler/icons-react';


const Counter = () => {
  const [count, setCount] = useState(0)

  const sumar = () => {

    setCount(count + 1)
  }
  const restar = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }
  return (

    <div className='botones'>
      <button className='quantity-button' onClick={restar}>Restar&nbsp;&nbsp;<IconSquareRoundedMinusFilled /></button>
      <span>{count}</span>
      <button className='quantity-button' onClick={sumar}>Sumar&nbsp;&nbsp;<IconSquareRoundedPlusFilled /></button>
    </div>


  )
}

export default Counter