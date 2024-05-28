import React from 'react'

const Loading = ({title}) => {
  return (

    <div className=' absolute h-screen w-full z-10 bg-gradient-to-br from-slate-700 to-stone-700   flex justify-center items-center'>
      <h1 className='md:text-4xl   text-orange-400 capitalize'>{title ? title :"Loading"}<span className='animate-ping text-white'>...</span></h1>
    </div>

  )
}

export default Loading
