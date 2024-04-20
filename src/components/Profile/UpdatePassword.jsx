import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { backendUrl } from '../index.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {
  const url = `${backendUrl}/updatepassword`
  
 
  const [passdata, setPassdata] = useState({
    currentPass: "", newPass: "", confirmPass: ""
  })

  const { currentPass, newPass, confirmPass } = passdata
  const [passtype, setPassType] = useState("password")


  let deBounceTimer;
  const handleChange = function (e) {
    clearTimeout(deBounceTimer)

    deBounceTimer = setTimeout(() => {
      console.log(e.target.value, "val")
      setPassdata({
        ...passdata, [e.target.name]: e.target.value
      })
    }, 500)
  }
  function handlePasstype(e) {
    e.preventDefault()
    if (passtype === "password") {
      setPassType("text")
    } else {
      setPassType("password")
    }
  }
  function updatePassword(e) {
    e.preventDefault()

    axios.put(url, passdata, {
      withCredentials: true
    }).then((response) => {
      console.log(response.data.message)
      toast.success(response?.data?.message)
      
     
    }).catch(error => {
      

      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    })
   setPassdata("")
   
  }
  return (
    <section className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white'>

      <section className='h-[90vh] flex flex-col justify-center items-center px-6 py-3'>
        <h1 className='text-center mb-10 md:text-5xl '>Update Password</h1>
        <form action='/' className='h-[80%] w-full md:w-1/3 flex flex-col   justify-evenly  px-5  bg-gradient-to-br from-slate-900 to-slate-600 rounded-2xl'>
          <div>
            <div>
              <label htmlFor='currentPass'>Current Password</label>
            </div>
            <div className='flex '>
              <input name='currentPass' type={passtype} onChange={handleChange} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
              <button className='text-2xl text-orange-500 ' onClick={(e) => {
                handlePasstype(e)
              }}>*</button>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor='newPass'>New Password</label>
            </div>
            <input name='newPass' id='newPass'  type={passtype} onChange={handleChange} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
          </div>

          <div>
            <div>
              <label htmlFor='confirmPass'>Confirm Password</label>
            </div>
            <input name='confirmPass' id='confirmPass'  type={passtype}  onChange={handleChange} className='w-full outline-none bg-transparent border-b-2 px-4 py-2 focus:border-blue-700 transition-border duration-200' />
          </div>

          <div className='h-[10vh]'>
            <button type='submit' className=' h-[100%] w-full bg-slate-900 rounded-xl hover:bg-blue-600' onClick={(e) => {
              updatePassword(e)
            }} >Update</button>
          </div>

        </form>
      </section>
      <ToastContainer />
    </section>
  )
}

export default UpdatePassword
