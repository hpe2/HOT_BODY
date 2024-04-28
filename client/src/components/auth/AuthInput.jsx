import React from 'react'

const AuthInput = ({img, type, placeholder, state, setState}) => {
  return (
    <div className='auth-input-wrap'>
      <img src={img} alt={placeholder} />
      <input 
        autoComplete='false'
        className='auth-input'
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default AuthInput