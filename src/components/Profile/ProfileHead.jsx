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
    
      setChildCss(" max-h-[40vh] w-[30vw] sm:w-[20vw] overflow-hidden  block absolute z-10  right-1 ")
      setClick(false)
    } else {
  
      setChildCss("")

    }
    //  setClick(false)
  }
  return (
    <section className={`  md:w-[220px]  overflow-hidden box-border  text-white   text-center    `}>
      <div className='my-2 h-10 rounded-xl w-12 flex justify-center items-center  '>
        <button onClick={handleCss} className=' text-slate-200 text-sm md:text-xl hover:text-yellow-400 '><CgProfile /> </button>
      </div>
      <div className='h-0 mt-5 overflow-hidden box-border'>
        <section  className={`lg:h-fit text-base w-[30vw]    inline-flex justify-evenly   lg:max-w-fit  rounded-xl   ease-in px-4 py-3  lg:px-4 lg:py-2  flex-col  items-start    shadow-xl  md:text-base bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-90 bg-gray-800 ${childCss}`}>
          {
            routes.map((item, index) => {
              return (<Link key={index} to={`/${item}`} className='hover:text-yellow-400  capitalize  text-yellow-300 to-yellow-5 bg-clip-text text-transparent'>{routesEle[index]}</Link>)
            })
          }

        </section>
      </div>
    </section>
  )
}

export default ProfileHead
