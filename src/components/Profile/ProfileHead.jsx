import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
const ProfileHead = ({ status }) => {
 
  const [click, setClick] = useState(true)
  const [childCss, setChildCss] = useState("h-0 hidden")
  
  let routes = ["profile", "updateprofile", "updatepassword", "channel", "deleteaccount", "logout"]
  let routesEle = ["Profile", "Update Profile", "Update Password", "Channel", "Delete Account", "Logout"]

  //  let pr = React.useRef()
   
  //  console.log()
  if(!status){
    routesEle =["login","signup"]
  }
  function handleCss(e) {
    e.preventDefault()
    setClick(true)
   
    
    if (click === true) {
    
      setChildCss("h-fit max-h-fit  block absolute z-10 ")
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
        <section  className={` text-xs w-fit h-fit lg:max-h-fit lg:max-w-fit  rounded-md   ease-in px-3 py-2   lg:px-4 lg:py-2 flex flex-col justify-evenly items-start overflow-hidden   bg-gray-900   bg-gradient-to-br from-slate-600 to-slate-800 shadow-xl  md:text-base ${childCss} lg:min-h-fit`}>
          {
            routes.map((item, index) => {
              return (<Link key={index} to={`/${item}`} className='hover:text-yellow-400 capitalize '>{routesEle[index]}</Link>)
            })
          }

        </section>
      </div>
    </section>
  )
}

export default ProfileHead
