import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'

const Nav = () => {
  const loginStaus = useSelector((state)=>state.auth.status)
  
 
  let navItems = ["login", "signup", ]
  if(!loginStaus){
    navItems=["login","signup"]
  }else{
    navItems=["profile", "uploadvideo","channel"]
  }
  
  return (

    <nav className=' md:h-[10vh] border-b-2  border-b-slate-400     rounded-xl text-yellow-50 flex flex-col justify-evenley md:flex-row md:justify-evenly md:items-center shadow-xl bg-gradient-to-br from-slate-600 to-slate-800'>
      {navItems.map((item) =>
        <Link to={"/" + item} key={useId()} className=' mx-3 hover:text-amber-400 hover:x`duration-200 transition-border '>{item}</Link>
      )}
    </nav>
  

  )
}

export default Nav
