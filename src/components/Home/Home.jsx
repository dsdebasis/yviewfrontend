import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from "axios"
import Nav from '../Navbar/Nav.jsx'

import VideoPage from '../Videos/VideoPage.jsx'
const Home = () => {

  // let authStatus = useSelector((state) => state.auth.status)
  // let authData = useSelector((state) => state.auth.userData)

  // if (authData !== null && authStatus === true) {
  //   navItems=[ "profile","updatepassword","updateprofile","logout"]
  // }

  return (
    <section className='min-h-screen px-2 overflow-hidden box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans'>

      <Nav />
      
      <VideoPage/>
    </section>
  )
}

export default Home
