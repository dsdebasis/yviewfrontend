import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
const ProfileHead = ({ status }) => {
 
  const [click, setClick] = useState(true)
  const [childCss, setChildCss] = useState("h-0 hidden")
  
  let routes = ["profile", "updateprofile", "reset-password", "updatepassword", "channel", "deleteaccount", "logout"]
  let routesEle = ["Profile", "Update Profile","Forgot-Password", "Update Password", "Channel", "Delete Account", "Logout"]

  //  let pr = React.useRef()
   
  //  console.log()
  if(!status){
    routesEle =["login","signup"]
  }
  function handleCss(e) {
    e.preventDefault()
    setClick(true)
   
    if (click === true) {
    
      setChildCss(" h-fit overflow-hidden max-h-fit  block absolute z-10 ")
      setClick(false)
    } else {
  
      setChildCss("")

    }
    //  setClick(false)
  }
  return (
    <section className={` w-full  md:w-[220px]  overflow-hidden box-border  text-white   text-center    `}>
      <div className='my-2 h-10 rounded-xl w-12 flex justify-center items-center  '>
        <button onClick={handleCss} className=' text-slate-200 text-sm md:text-xl hover:text-yellow-400 '><CgProfile /> </button>
      </div>
      <div className='h-0 mt-5 overflow-hidden box-border'>
        <section  className={` text-base w-full  h-[50vh] gap-y-4 lg:h-[40vh] lg:max-w-fit  rounded-xl   ease-in pl-4    lg:px-4 lg:py-2 flex flex-col justify-around items-start   bg-gradient-to-bl  shadow-xl  md:text-base   ${childCss}`}>
          {
            routes.map((item, index) => {
              return (<Link key={index} to={`/${item}`} className='hover:text-yellow-400 capitalize bg-gradient-to-b from-white to-amber-500 bg-clip-text text-transparent'>{routesEle[index]}</Link>)
            })
          }

        </section>
      </div>
    </section>
  )
}

export default ProfileHead
