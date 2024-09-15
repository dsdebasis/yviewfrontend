import React from 'react'
import ProfileHeading from "../Profile/ProfileHead.jsx"
import { useDispatch, useSelector } from 'react-redux'
const Search = () => {

  let authStatus = useSelector((state) => state.auth.status)
  return (
    <section className=' my-10 flex  gap-y-4 flex-row md:flex-row md:justify-between '>
      {/* <div className='h-[10%] my-2 w-full ml-14 md:flex md:justify-center'>
       
      </div> */}
      <div className=' absolute z-5 lg:z-10   md:right-14 w-[250px]'>
        <ProfileHeading status={authStatus} />
      </div>
    </section>
  )
}

export default Search
