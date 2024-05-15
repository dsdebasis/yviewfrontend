import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ProfileHead = () => {
  const [css,setCss] = useState("")
  const [click,setClick] = useState(true)
  const [childCss,setChildCss] = useState(" hidden") 
  let routes = ["profile","updateprofile","updatepassword","createchannel","deleteaccount","logout"]
  let routesEle = ["Profile","Update Profile","Update Password","Create Channel","Delete Account","Logout"]
  function handleCss(e){
    e.preventDefault()
    setClick(true)
    console.log( "clicked value",click)

    if(click === true){
      setCss("border-blue-500 h-[50vh] shadow shadow-3xl")
      setChildCss("")
      setClick(false)
    } else{
      setCss("")
      setChildCss("hidden")
    }
  //  setClick(false)
  }
  return (
    <section onClick={handleCss}  className={`border-2 absolute top-[0vh] z-10   md:w-[200px] h-14 overflow-hidden box-border   rounded-2xl text-white p-4  bg-gradient-to-b  left-5 text-center ease-in-out duration-200 ${css} `}>
      <span className=' inline-block text-slate-200 md:text-xl active:text-blue-600'>Account</span>
      <section className={ `h-[90%]  w-full flex flex-col justify-evenly items-start `}>
        {
          routes.map((item,index)=>{
            return ( <Link key={index} className={`${childCss}`}   to={`/${item}`}>{routesEle[index]}</Link>)
          })
        }
         
      </section>
    </section>
  )
}

export default ProfileHead
