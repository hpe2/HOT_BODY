
const PtRegisterInput = ({label, value, setState, placeholder}) => {
  return (
    <div className='flex-align pt-register-input-wrap'>
      <span>{label}</span>
      <input 
        value={value} 
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)} 
        className='pt-register-input'
      />
    </div>
  )
}

export default PtRegisterInput