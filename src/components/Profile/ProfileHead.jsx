import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ProfileHead = ({status}) => {
  const [css,setCss] = useState("")
  const [click,setClick] = useState(true)
  const [childCss,setChildCss] = useState("h-0 hidden") 
  console.log(status)
  let routes = ["profile","updateprofile","updatepassword","createchannel","deleteaccount","logout"]
  let routesEle = ["Profile","Update Profile","Update Password","Create Channel","Delete Account","Logout"]
  function handleCss(e){
    e.preventDefault()
    setClick(true)
    console.log( "clicked value",click)

    if(click === true){
      setCss(" h-[40vh] border-blue-100 ")
      setChildCss("h-[90%] block")
      setClick(false)
    } else{
      setCss("")
      setChildCss("")
    }
  //  setClick(false)
  }
  return (
    <section  className={`border-2 border-white absolute  z-10 w-full  md:w-[200px] h-14 overflow-hidden box-border   rounded-xl text-white py-1 bg-gradient-to-b  left-5 text-center ease-in-out duration-200 ${css} `}>
      <button onClick={handleCss} disabled={!status} className=' text-slate-200 text-sm md:text-xl hover:text-yellow-400 h-[50px]'>{status ?  "Account" :" Log in" }</button>
      <section className={ `px-2 w-full flex flex-col gap-y-3 items-start ${childCss} `}>
        {
          routes.map((item,index)=>{
            return ( <Link key={index}   to={`/${item}`}>{routesEle[index]}</Link>)
          })
        }
         
      </section>
    </section>
  )
}

export default ProfileHead
