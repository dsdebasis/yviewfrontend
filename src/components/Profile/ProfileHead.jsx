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
    console.log("clicked value", click)
    
    if (click === true) {
    
      setChildCss("h-fit max-h-fit  block absolute z-10 ")
      setClick(false)
    } else {
      
      setChildCss("")
    }
    //  setClick(false)
  }
  return (
    <section className={`h-full  w-full  border-amber-400  md:w-[250px]  overflow-hidden box-border  text-white   text-center  `}>
      <div className='my-2 h-10 md:mx-5  border-stone-500 border-2 rounded-xl w-12 flex justify-center items-center  '>
        <button onClick={handleCss} className=' text-slate-200 text-sm md:text-xl hover:text-yellow-400 '><CgProfile /> </button>
      </div>
      <div className='h-0 '>
        <section  className={`w-full rounded-xl  ease-in   px-5 py-3 flex flex-col justify-evenly items-start overflow-hidden gap-y-5 bg-gray-900  border-2 border-stone-500 bg-gradient-to-br from-slate-600 to-slate-800 ${childCss} `}>
          {
            routes.map((item, index) => {
              return (<Link key={index} to={`/${item}`}>{routesEle[index]}</Link>)
            })
          }

        </section>
      </div>
    </section>
  )
}

export default ProfileHead
