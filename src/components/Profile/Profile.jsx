import React from 'react'
import axios from "axios"
import { backendUrl } from '../index.js'
import toast, { Toaster } from 'react-hot-toast';
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
    <div className='h-screen  flex justify-center items-center '>

      <section className=' h-[90vh]  w-[90vw]  md:w-[40vw] lg:w-[30vw] lg:shadow-2xl  text-white  rounded-3xl py-4 grid grid-flow-row  grid-rows-6 items-center    p-4    gap-y-3 border-2 border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 '>

        <div className=' place-self-center mt-10 '>
          <img alt='profile image' src={profilePicUrl} className='h-[18vh] w-[18vh] border-2 border-stone-400 rounded-full shadow-2xl shadow-indigo-400'></img>

        </div>
        <h1 className='mt-[20vh] text-center text-3xl bg-clip-text text-transparent bg-gradient-to-t from-indigo-200  to-blue-600'>Update Details</h1>

        <form className='row-span-4 h-[80%]  mt-[10vh] flex flex-col justify-around px-2    rounded-md py-4'>

     
          <label htmlFor='updateFullname '>Full Name</label>
          <Input id='updateFullname' name='updateFullname' type='text' onChange={handleChange} css='outline-0   px-3 py-2 rounded-md placeholder:text-orange-400  focus:border-amber-300 duration-100' placeholder={fullname} required={true}/>

          <label htmlFor='updateEmail'>Email</label>
          <Input name={"updateEmail"} type={"email"} fun={handleChange} placeholder={email}  css="outline-0 placeholder:text-orange-400 focus:border-amber-300 duration-100"/>         

          <label htmlFor='updateUsername'>Username</label>
          <Input name={"updateUsername"} type={"text"} fun={handleChange} placeholder={username}  css="outline-0 placeholder:text-orange-400  focus:border-amber-300  duration-100"/> 


          <button type='submit' className='h-10 lg:h-12  w-full hover:bg-indigo-600 rounded-xl bg-blue-600 ' onClick={updateProfile} >Update</button>

        </form>
      </section>
      <Toaster />
    </div>

  )
}

export default Profile
