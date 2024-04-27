import React from 'react'

const Input = ({ id,type,name, disabled,placeholder,value,required,fun,css}) => {
  return (
    <input type={type} name={name}  placeholder={placeholder} disabled={disabled}  value={value} required={required} onChange={fun} className={`w-full h-10
     px-4 py-2   text-white  box-border bg-transparent border-b-2 outline-none   pb-2 focus:border-blue-400  transition-border duration-200 ${css}`}/>
  )
}

export default Input
