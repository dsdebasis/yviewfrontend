import React from 'react'
import ProfileHeading from "../Profile/ProfileHead.jsx"
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {

  let authStatus = useSelector((state) => state.auth.status)
  return (
    <section className=' md:rounded-lg  bg-gradient-to-bl from-slate-900   flex  gap-y-4 flex-row md:flex-row md:justify-between'>
      <div className='h-[10%] w-fit my-2  ml-14 md:flex md:justify-center'>
        <input type='text' placeholder='search your videos ' className='h-full w-full md:w-[30vw] outline-none  p-2 bg-transparent border-2 rounded-xl  focus:border-blue-500 text-white' />
      </div>
      <div className=' absolute   md:right-14 w-[250px]   border-yellow-700'>
        <ProfileHeading status={authStatus} />
      </div>
    </section>
  )
}

export default Search
