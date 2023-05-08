import React from 'react'

const Test = ({name, type, placeholder}) => {
  return (
    <div class="input-container">
  <input placeholder={placeholder} class="input-field" type={type} />
  <label for="input-field" class="input-label">{name}</label>
  <span class="input-highlight"></span>
</div>

  
  )
}

export default Test
