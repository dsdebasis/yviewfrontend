import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
import { BsMenuButtonWideFill } from "react-icons/bs";
const Nav = ({css=""}) => {
  const loginStaus = useSelector((state)=>state.auth.status)
  
  let navItems = [""]
  if(!loginStaus){
    navItems=["home","login","signup","reset-password","channel"]
  }else{
    navItems=[ "home","profile","logout","channel",]
  }
  
   
    return (
      <nav className={`h-full w-full overflow-hidden  box-border rounded-xl lg:rounded-sm  ${css} flex flex-col justify-around gap-y-5  lg:flex-row lg:justify-evenly lg:items-center text-yellow-300 py-3 `}>
            {navItems.map((item) =>
            <Link to={"/" + item} key={useId()} className='overflow-hidden mx-3  capitalize  rounded-sm lg:border-none '>{item}</Link>
            )}
        
      </nav>
    )
}

export default Nav
