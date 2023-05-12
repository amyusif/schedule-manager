import React from 'react'


const Test = ({name, type, placeholder}) => {


  
  return (
    <div class="input-group">
    <label class="label">{name}</label>
    <input  name={name}  class="input" type={type} placeholder={placeholder} />
    <div></div></div>

  
  )
}

export default Test
