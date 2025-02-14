import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
import { BsMenuButtonWideFill } from "react-icons/bs";
const Nav = () => {
  const loginStaus = useSelector((state)=>state.auth.status)
  
  let navItems = [""]
  if(!loginStaus){
    navItems=[ "about","login","signup","reset-password"]
  }else{
    navItems=[ "channel","profile","logout",]
  }

   
    return (
      <section className={`h-full w-full sm:flex-row sm:justify-evenly sm:items-center   overflow-hidden  box-border rounded-xl lg:rounded-sm   flex flex-col justify-around gap-y-5  lg:flex-row lg:justify-evenly lg:items-center text-yellow-400 `}>
        <Link to="/" className='overflow-hidden mx-3  capitalize  rounded-sm lg:border-none '>Home</Link>

            {navItems.map((item,index) =>
            <Link to={`/${item}`} key={useId()} className='overflow-hidden mx-3  capitalize  rounded-sm lg:border-none '>{item}</Link>
            )}
        
      </section>
    )
}

export default Nav
