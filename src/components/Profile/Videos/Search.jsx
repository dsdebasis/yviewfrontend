import React from 'react'
import ProfileHeading from "../Profile/ProfileHead.jsx"
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {

  let authStatus = useSelector((state) => state.auth.status)
  return (
    <section className='my-10 flex  gap-y-4 flex-row md:flex-row md:justify-between '>
      <div className='h-[10%] my-2 w-full ml-14 md:flex md:justify-center'>
        <input type='text' placeholder='search your videos ' className='h-full w-full  border-none md:w-[30vw] outline-none  p-2 bg-transparent rounded-xl   text-white' />
      </div>
      <div className=' absolute   md:right-14 w-[250px]'>
        <ProfileHeading status={authStatus} />
      </div>
    </section>
  )
}

export default Search
