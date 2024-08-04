import React from 'react'

function Button({name,style,fun}) {
  return (
    <button className={`w-full  rounded-md text-white bg-blue-600 p-1 ${style}`} onClick={fun}>{name || "Button"} </button>
  )
}

export default Button