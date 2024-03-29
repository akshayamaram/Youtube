import React from 'react'
import '../styles/ButtonList.css'

const Button = ({name}) => {
  return (
    <div>
        <button className='btn'>{name}</button>
    </div>
  )
}

export default Button