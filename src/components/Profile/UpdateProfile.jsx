import React from 'react'
import { backendUrl } from '../index.js'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const UpdateProfile = () => {
  const [profile, setProfile] = React.useState("")
  const [cover, setCover] = React.useState("")
  const [updateCover, setUpdateCover] = React.useState("")
  const [updateProfile, setUpdateProfile] = React.useState("")
  
  
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

    }).catch((err) => {
      console.log("error",err?.response)
      toast.error(err?.response?.data.message)
    })
  }


  return (
    <section className='md:h-screen w-full  bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col py-10'>
      <header className=' text-center md:text-4xl text-white'>Update Profile And Cover</header>
      <form encType='multipart/form-data' className='md:h-[90vh]  justify-self-center text-white grid  py-3 px-2'>
        <div className=' flex  flex-row flex-wrap justify-center  gap-y-9 p-5 md:gap-x-5'>
          <div >

            <img className=' md:w-[90%] md:h-[50vh]  rounded-2xl shadow-2xl' src={profile} />
            <input type='file' name="updateProfilePic" onChange={(e) => (
              setUpdateProfile(e.target.files[0]))} className='mt-5 outline-none  border-2 rounded-lg px-1 py-2 border-green-700' />
          </div>

          <div >

            <img className='md:w-[90%] md:h-[50vh]  rounded-2xl shadow-2xl' src={cover} />
            <input type='file' name='updateCoverImage' onChange={(e) => (
              setUpdateCover(e.target.files[0]))} className='mt-5 outline-none  border-2 border-green-700 rounded-lg px-1 py-2' />
          </div>


        </div>

        <div className='md:w-[50vw] md:place-self-center px-5'>
          <button type='submit' onClick={(e) => {
            updateProfileCover(e)
          }} className='h-14  w-full  bg-slate-900 rounded-xl hover:bg-blue-600' >Update </button>

        </div>
      </form>

      <ToastContainer />

    </section>
  )
}

export default UpdateProfile
