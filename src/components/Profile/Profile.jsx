import React from 'react'
import axios from "axios"
import { backendUrl } from '../index.js'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const Profile = () => {
  let url = `${backendUrl}/profile`

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [fullname,setFullname] = useState("")

  const [userInfo, setUserInfo] = useState(
    {
      updateFullname: "",
      updateEmail: "",
      updateUsername: ""
    }
  )

  let {updateEmail,updateFullname,updateUsername} = userInfo

  let deBounceTimer ;
  const handleChange = function (e) {
    clearTimeout(deBounceTimer)

     deBounceTimer = setTimeout(()=>{
      console.log("updated data",e.target.value)
      setUserInfo(
        {
          ...userInfo,
            [e.target.name]:e.target.value
        }
      )
     },1000)
    
  }
 
  const [profilePicUrl, setProfilePicUrl] = useState("")
 
  const getProfile = function () {
    axios.get(url, {
      withCredentials: true
    }).then((res) => {
      res = res?.data?.data
       setProfilePicUrl(res.profilePic)
       setUsername(res.username)
       setFullname(res.fullname)
       setEmail(res.email)
      toast.success()
    })
  }

  React.useEffect(() => {
    getProfile()
  },[username])

  const updateProfile = (e) => {
    e.preventDefault()
      
      axios.put(url, userInfo, {
      withCredentials: true
    }).then((res) => {
      toast.success(res.data.message)
      res = res.data.data
      console.log(res)
      setUsername(res.username)
       setEmail(res.email)
       setFullname(res.fullname)
    }).catch((resdata) => {
      toast.error(resdata.response?.data.message)
    })

  }
 
 
  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center'>

      <section className='h-[90vh]  w-[90vw] md:w-[30vw] shadow-2xl  text-white  rounded-3xl py-4 grid grid-flow-row  grid-rows-4   gap-y-5 p-4 bg-gradient-to-br  '>
        <div className=' place-self-center mt-10 '>
          <img src={profilePicUrl} className='h-[18vh] w-[18vh] border-2 rounded-full shadow-md'></img>

        </div>
        <form className='h-[90%]  mt-10 row-span-3 flex flex-col justify-around px-7 bg-gradient-to-bl from-slate-600  shadow-xl rounded-xl py-2 '>

          <h1 className='text-center md:text-3xl'>Update Details</h1>
          <label htmlFor='updateFullname'>Full Name</label>
          <input id='updateFullname' name='updateFullname' type='text' onChange={handleChange} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={fullname} />
     
          <label htmlFor='updateEmail'>Email</label>
          <input id='updateEmail' name='updateEmail' type='email' onChange={handleChange} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={email} />

          <label htmlFor='updateUsername'>Username</label>
          <input id='updateUsername' name='updateUsername' type='text' onChange={handleChange} className='outline-0 bg-gradient-to-br from-gray-700 to-slate-500 px-3 py-2 rounded-md placeholder:text-orange-400' placeholder={username} />


          <button type='submit'  className='h-14 md:h-[8vh] w-full bg-slate-900 rounded-xl hover:bg-blue-600 ' onClick={ updateProfile} >Update</button>

        </form>
      </section>
      <ToastContainer/>
    </div>

  )
}

export default Profile
