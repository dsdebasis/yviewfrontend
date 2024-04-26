import React from 'react'

const Search = () => {
  return (
    <div className=' h-14 w-full my-10 flex justify-center px-5'>
      <input type='text' placeholder='search your videos ' className='h-full w-full md:w-[60%] outline-none  p-2 bg-transparent border-2 border-stone-500 rounded-2xl'/>
    </div>
  )
}

export default Search
