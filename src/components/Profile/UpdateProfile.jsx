import React from 'react'
import { backendUrl } from '../index.js'
import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../Loading/Loading.jsx';
const UpdateProfile = () => {
  const [profile, setProfile] = useState("")
  const [cover, setCover] = useState("")
  const [updateCover, setUpdateCover] = useState("")
  const [updateProfile, setUpdateProfile] = useState("")
  const [loading, setLoading] = useState(false)
  const [blur,setBlur] = useState("")
  function getProfileAndCover() {

    axios.get(`${backendUrl}/updateprofileandcover`, {
      withCredentials: true
    }).then((res) => {
      setProfile(res.data.data.profilePic)
      setCover(res.data.data.coverImage)
    })
  }

  React.useEffect(() => {
    getProfileAndCover()
  }, [profile, cover])

  const updateProfileCover = function (e) {
    e.preventDefault()
    setLoading(true)
    setBlur("blur-lg")
    let updateRes
    const formData = new FormData();
    formData.append('updateProfilePic', updateProfile)
    formData.append('updateCoverImage', updateCover)
    axios.put((`${backendUrl}/updateprofileandcover`), formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      
      if (res.data?.data?.profilePic !== undefined) {
        setProfile(res.data?.data?.profilePic)
      }
      if (res.data?.data?.coverImage !== undefined) {
        setCover(res.data?.data?.coverImage)
      }
      toast.success(res.data.message)
    }).catch((err) => {
      
      toast.error(err?.response?.data.message)
    }).finally((res) => {
      
      setLoading(false)
      setBlur("")
    })
  }


  return (
    <section className="min-h-screen w-full  bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-evenly ">
      <header className='mt-6 text-center md:text-2xl text-white'>Update Profile And Cover</header>
      <form encType='multipart/form-data' className={`md:bg-gradient-to-bl md:rounded-lg mx-5 md:mx-[25vw] md:h-[80%]  overflow-hidden  justify-self-center text-white grid  py-3 px-2 ${blur}`}>
        <div className=' flex  flex-row flex-wrap justify-around  gap-y-5 p-5 md:gap-x-5 '>
          <div >

            <img className='h-[350px] w-[300px] overflow-hidden md:w-[100%] md:h-[50vh]  rounded-2xl shadow-2xl' src={profile} alt='profile' />
            <input type='file' disabled={loading} name="updateProfilePic" onChange={(e) => (
              setUpdateProfile(e.target.files[0]))} className='mt-5 outline-none  border-2 rounded-lg px-1 py-2 border-green-700' />
          </div>

          <div >

            <img className='h-[350px] w-[300px] overflow-hidden md:w-[100%] md:h-[50vh]  rounded-2xl shadow-2xl' src={cover} alt='cover'/>
            <input type='file' disabled={loading} name='updateCoverImage' onChange={(e) => (
              setUpdateCover(e.target.files[0]))} className='mt-5 outline-none  border-2 border-green-700 rounded-lg px-1 py-2' />
          </div>


        </div>

        <div className='w-full'>
          <button type='submit' disabled={loading} onClick={(e) => {
            updateProfileCover(e)
          }} className='h-14 w-full  bg-slate-900 rounded-xl hover:bg-blue-600' >Update </button>

        </div>
      </form>

      <ToastContainer />
      
      
        {loading ? <Loading/> :""}
    </section>
  )
}

export default UpdateProfile
