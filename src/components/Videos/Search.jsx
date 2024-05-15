import React from 'react'
import ProfileHeading from "../Profile/ProfileHead.jsx"
const Search = () => {
  return (
    <section className='relative bg-gradient-to-r from-slate-900 to-slate-700    h-[10vh] w-full my-10 flex justify-center px-5 items-center'>
      <input type='text' placeholder='search your videos ' className='h-full w-full md:w-[60%] outline-none  p-2 bg-transparent border-2 border-stone-500 rounded-2xl md:h-[70%]'/>
     <ProfileHeading/>
    </section>
  )
}

export default Search
