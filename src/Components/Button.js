import React from 'react'

const Button = ({button, icon, type}) => {
  return (
    <div>
      <button type={type}>{button} <span>{icon}</span></button>
    </div>
  )
}

export default Button
