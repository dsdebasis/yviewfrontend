import React from 'react'
import { Link } from 'react-router-dom'
import { useId } from 'react'
import { useSelector } from 'react-redux'
import { BsMenuButtonWideFill } from "react-icons/bs";
const Nav = () => {
  const loginStaus = useSelector((state)=>state.auth.status)
  
  const [show, setShow] = React.useState(false)
  const [css, setCss] = React.useState("") 
  let navItems = ["login", "signup", ]
  if(!loginStaus){
    navItems=["home","login","signup",]
  }else{
    navItems=[ "home","profile","logout","channel",]
  }
  
   
    return (
      <nav className={` z-50 w-full  h-fit xl:h-[12vh]   text-white  
        <div className="h-screen    xl:p-0 xl:flex xl:flex-row xl:items-center xl:justify-center xl:fixed xl:z-50 ${css} p-1`}>
  
        <div className='  h-full box-border  xl:h-[80%] w-[98%]  rounded-xl   flex flex-col justify-around shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  xl:flex-row xl:justify-around xl:items-center  p-2'>
          {/* <BsMenuButtonWideFill className='pl-0 text-xl xl:hidden self-center hover:text-amber-400' onClick={(e)=>{
            e.preventDefault()
          //  setCss("flex z-50")
            // setShow(!show)
          }
          } /> */}
            {navItems.map((item) =>
            <Link to={"/" + item} key={useId()} className='overflow-hidden mx-3 hover:text-amber-400 hover:x` duration-200  capitalize hover:border-2 hover:p-2 hover:rounded-md hover:duration-200 hover:transition-border  hover:bg-gradient-to-b'>{item}</Link>
            )}
        </div>
      </nav>
    )
}

export default Nav
