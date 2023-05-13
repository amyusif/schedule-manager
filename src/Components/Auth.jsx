import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({name, icon, id}) => {
  return (
    <div className='auth'>
  <Link to='/' className='btn-auth' id={id}>{icon} {name}</Link>
    </div>
  )
}

export default Auth
