import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
import UploadVideo from '../Video/UploadVideo.jsx'
import { useEffect } from 'react'
import axios from "axios"

const Home = () => {
  let navItems = ["login", "signup","profile","updatepassword","updateprofile","logout"]
  // let authStatus = useSelector((state) => state.auth.status)
  // let authData = useSelector((state) => state.auth.userData)

  // if (authData !== null && authStatus === true) {
  //   navItems=[ "profile","updatepassword","updateprofile","logout"]
  // }
  
  return (
    <section className='min-h-screen px-2 overflow-hidden box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans'>
      <nav className=' md:h-[10vh] mt-3  border-b-2  border-b-slate-400     rounded-xl text-yellow-50 flex flex-col justify-evenley md:flex-row md:justify-evenly md:items-center shadow-xl bg-gradient-to-br from-slate-600 to-slate-800'>
        {navItems.map((item) =>
          <Link to={"/" + item} key={useId()} className=' mx-3 hover:text-amber-400 hover:x`duration-200 transition-border '>{item}</Link>
        )}
      </nav>

      <UploadVideo />
      
    </section>
  )
}

export default Home
