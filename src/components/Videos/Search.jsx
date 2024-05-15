import React from 'react'
import ProfileHeading from "../Profile/ProfileHead.jsx"
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {

  let authStatus = useSelector((state) => state.auth.status)
  return (
    <section className=' bg-gradient-to-r from-slate-900 to-slate-700    h-[10vh] w-full my-10 grid grid-flow-col grid-cols-4  '>
      <div className=' col-span-3 md:ml-[10vw]'>
        <input type='text' placeholder='search your videos ' className='h-full w-full md:w-[60%] outline-none  p-2 bg-transparent border-2 border-stone-500 rounded-2xl md:h-[70%] focus:border-blue-500 text-white' />
      </div>
      <div className='relative  mr-4'>
      <ProfileHeading status={authStatus} />
      </div>
    </section>
  )
}

export default Search
