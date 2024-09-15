import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
import { BsMenuButtonWideFill } from "react-icons/bs";
const Nav = ({css=""}) => {
  const loginStaus = useSelector((state)=>state.auth.status)
  
  const [show, setShow] = React.useState(false)
  
  let navItems = [""]
  if(!loginStaus){
    navItems=["home","login","signup","reset-password"]
  }else{
    navItems=[ "home","profile","logout","channel",]
  }
  
   
    return (
      <nav className={`h-full w-full overflow-hidden  box-border rounded-md  ${css} flex flex-col justify-around items-start lg:flex-row lg:justify-evenly lg:items-center text-yellow-300 p-2 bg-gradient-to-br from-gray-800 to-slate-700`}>
            {navItems.map((item) =>
            <Link to={"/" + item} key={useId()} className='bg-gradient-to-b overflow-hidden mx-3  capitalize border-2 border-stone-600 p-2 rounded-md lg:border-none lg:bg-none'>{item}</Link>
            )}
        
      </nav>
    )
}

export default Nav
