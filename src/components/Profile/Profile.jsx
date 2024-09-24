import React from 'react'
import axios from "axios"
import { backendUrl } from '../index.js'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Input from '../Input/Input.jsx';
const Profile = () => {
  let url = `${backendUrl}/profile`

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")

  const [userInfo, setUserInfo] = useState(
    {
      updateFullname: "",
      updateEmail: "",
      updateUsername: ""
    }
  )

  let { updateEmail, updateFullname, updateUsername } = userInfo

  let deBounceTimer;
  const handleChange = function (e) {
    clearTimeout(deBounceTimer)

    deBounceTimer = setTimeout(() => {
      console.log("updated data", e.target.value)
      setUserInfo(
        {
          ...userInfo,
          [e.target.name]: e.target.value
        }
      )
    }, 1000)

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
      console.log(profilePicUrl)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  React.useEffect(() => {
    getProfile()
  }, [])

  const updateProfile = (e) => {
    e.preventDefault()

    axios.put(url, userInfo, {
      withCredentials: true
    }).then((res) => {
      toast.success(res.data.message)
      res = res.data.data

      setUsername(res.username)
      setEmail(res.email)
      setFullname(res.fullname)

    }).catch((resdata) => {
      toast.error(resdata.response?.data.message)
    })

  }


  return (
    <div className='h-screen  flex justify-center items-center'>

      <section className='h-[90vh]  w-[90vw]  md:w-[40vw] lg:w-[30vw] shadow-2xl  text-white  rounded-3xl py-4 grid grid-flow-row  grid-rows-4 items-center   gap-y-10 p-4   '>
        <div className=' place-self-center mt-10 '>
          <img alt='profile image' src={profilePicUrl} className='h-[18vh] w-[18vh] border-2 border-stone-400 rounded-full shadow-2xl shadow-indigo-400'></img>

        </div>
        <form className='h-[80%]  mt-8 row-span-3 flex flex-col justify-around px-2 bg-gradient-to-bl   rounded-xl '>

          <h1 className='text-center lg:text-2xl'>Update Details</h1>
          <label htmlFor='updateFullname'>Full Name</label>
          <Input id='updateFullname' name='updateFullname' type='text' onChange={handleChange} css='outline-0 border-0 bg-gradient-to-t  px-3 py-2 rounded-md placeholder:text-orange-400 focus:border-b-2 focus:border-amber-300 duration-100' placeholder={fullname} />

          <label htmlFor='updateEmail'>Email</label>
          <Input name={"updateEmail"} type={"email"} fun={handleChange} placeholder={email}  css="outline-0 placeholder:text-orange-400 focus:border-b-2 border-0 focus:border-amber-300 bg-gradient-to-t duration-100"/>         

          <label htmlFor='updateUsername'>Username</label>
          <Input name={"updateUsername"} type={"text"} fun={handleChange} placeholder={username}  css="outline-0 placeholder:text-orange-400 focus:border-b-2 border-0 focus:border-amber-300 bg-gradient-to-t duration-100"/> 


          <button type='submit' className='h-12 md:h-[8vh] w-full bg-slate-900 rounded-xl hover:bg-blue-600 ' onClick={updateProfile} >Update</button>

        </form>
      </section>
      <ToastContainer />
    </div>

  )
}

export default Profile
