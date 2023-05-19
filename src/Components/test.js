import React from 'react'
import { Styledinput } from './Styled-Components/StyledList.styled'


const Test = ({name, type,}) => {


  
  return (
    <div class="input-group">
    <label class="label">{name}</label>
    <Styledinput type={type} width='360'></Styledinput>
    <div></div></div>

  
  )
}

export default Test
