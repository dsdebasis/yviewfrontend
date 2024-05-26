import React from 'react'

const Input = ({ id,type,name, disabled,placeholder,value,required,fun,css}) => {
  return (
    <input type={type} name={name}  placeholder={placeholder} disabled={disabled}  value={value} required={required} onChange={fun} className={`w-full h-10
     px-4  my-2 rounded-md  text-white  box-border bg-transparent border-2 outline-none  focus:border-black  transition-border duration-200 ${css}`}/>
  )
}

export default Input
